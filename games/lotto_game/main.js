import {loadImage} from '../tic_tac_toe_game/image_loader.js';
import {getBarNum, resetBarNums} from './ran_num.js';

const TICKET_ROWS = 3;
const TICKET_COLUMNS = 9;
const NUMS_IN_ROW = 5;
const PLAYERS = 2;
const TICKETS_BY_PLAYER = 3;
const NUMS_IN_TICKET = TICKET_ROWS * NUMS_IN_ROW;
const TICKET_IMAGE_URL = '../../images/games_images/lotto_images/lotto_processing_images/ticket.bmp';
const CROSS_IMAGE_URL = '../../images/games_images/tic_tac_toe_images/tic_tac_toe_processing_images/red_cross01.png';
const PLAYER_NAMES = [
	'Верхний',
	'Нижний',
];
const COLUMN_NUMS = [
	[1, 9],
	[10, 19],
	[20, 29],
	[30, 39],
	[40, 49],
	[50, 59],
	[60, 69],
	[70, 79],
	[80, 90],
];

function shuffle(nums) {
	for (let ind = nums.length - 1; ind > 0; ind--) {
		const nextInd = Math.floor(Math.random() * (ind + 1));
		[nums[ind], nums[nextInd]] = [nums[nextInd], nums[ind]];
	}

	return nums;
}

function getRandomColumns() {
	return shuffle([...Array(TICKET_COLUMNS).keys()]).slice(0, NUMS_IN_ROW);
}

function getColumnNums(column, count) {
	const [minNum, maxNum] = COLUMN_NUMS[column];
	const nums = [];

	for (let num = minNum; num <= maxNum; num++) {
		nums.push(num);
	}

	return shuffle(nums).slice(0, count).sort((left, right) => left - right);
}

function createTicketNums() {
	const ticketNums = Array.from(
		{length: TICKET_ROWS},
		() => Array(TICKET_COLUMNS).fill(null),
	);
	const rowsByColumn = Array.from(
		{length: TICKET_COLUMNS},
		() => [],
	);

	for (let row = 0; row < TICKET_ROWS; row++) {
		for (const column of getRandomColumns()) {
			rowsByColumn[column].push(row);
		}
	}

	for (let column = 0; column < TICKET_COLUMNS; column++) {
		const rows = rowsByColumn[column];
		const nums = getColumnNums(column, rows.length);

		for (let ind = 0; ind < rows.length; ind++) {
			ticketNums[rows[ind]][column] = nums[ind];
		}
	}

	return ticketNums;
}

function getTicketGrid(ticketCanvas) {
	const gridLeft = ticketCanvas.width * 0.028;
	const gridTop = ticketCanvas.height * 0.069;
	const cellWidth = ticketCanvas.width * 0.944 / TICKET_COLUMNS;
	const cellHeight = ticketCanvas.height * 0.862 / TICKET_ROWS;

	return {
		gridLeft,
		gridTop,
		cellWidth,
		cellHeight,
	};
}

function drawTicketNums(ticketCanvas, ticketNums) {
	const context = ticketCanvas.getContext('2d');
	const {gridLeft, gridTop, cellWidth, cellHeight} = getTicketGrid(ticketCanvas);

	context.fillStyle = 'black';
	context.textAlign = 'center';
	context.textBaseline = 'middle';
	context.font = 'bold ' + Math.floor(cellHeight * 0.58) + 'px Arial, sans-serif';

	for (let row = 0; row < TICKET_ROWS; row++) {
		for (let column = 0; column < TICKET_COLUMNS; column++) {
			const num = ticketNums[row][column];

			if (num === null) {
				continue;
			}

			context.fillText(
				num,
				gridLeft + cellWidth * (column + 0.5),
				gridTop + cellHeight * (row + 0.5),
			);
		}
	}
}

function drawCross(ticketCanvas, cross, row, column) {
	const context = ticketCanvas.getContext('2d');
	const {gridLeft, gridTop, cellWidth, cellHeight} = getTicketGrid(ticketCanvas);
	const crossWidth = cellWidth * 0.72;
	const crossHeight = cellHeight * 0.72;
	const crossLeft = gridLeft + cellWidth * column + (cellWidth - crossWidth) / 2;
	const crossTop = gridTop + cellHeight * row + (cellHeight - crossHeight) / 2;

	context.drawImage(cross, crossLeft, crossTop, crossWidth, crossHeight);
}

function markBarNum(ticketStates, playerStates, cross, barNum) {
	for (const ticketState of ticketStates) {
		for (let row = 0; row < TICKET_ROWS; row++) {
			for (let column = 0; column < TICKET_COLUMNS; column++) {
				if (ticketState.nums[row][column] === barNum && !ticketState.marked[row][column]) {
					ticketState.marked[row][column] = true;
					playerStates[ticketState.player].markedNums++;
					drawCross(ticketState.canvas, cross, row, column);
				}
			}
		}
	}
}

function getWinningPlayers(playerStates) {
	const winningPlayers = [];

	for (let player = 0; player < playerStates.length; player++) {
		if (playerStates[player].markedNums === playerStates[player].totalNums) {
			winningPlayers.push(player);
		}
	}

	return winningPlayers;
}

function getWinMessage(winningPlayers) {
	if (winningPlayers.length === 1) {
		return PLAYER_NAMES[winningPlayers[0]] + ' игрок победил!';
	}

	return 'Верхний и Нижний игроки победили!';
}

// creating ran num
const overlayText = document.getElementById('barrel-result-text');
const nextBarrelBtn = document.getElementById('next_barrel');
const resultWindow = document.getElementById('game-result');
const resultWindowText = document.getElementById('game-result-info');
const newGameBtn = document.getElementById('new-game');

// let overlay-text = barNum

const imageUrls = [
	TICKET_IMAGE_URL,
	CROSS_IMAGE_URL,
]

const [ticket, cross] = await Promise.all (
	imageUrls.map(loadImage)
);

// printing ticket

let ticketStates = [];
let playerStates = [];
let gameOver = false;

function createPlayerStates() {
	return Array.from(
		{length: PLAYERS},
		() => ({
			markedNums: 0,
			totalNums: TICKETS_BY_PLAYER * NUMS_IN_TICKET,
		}),
	);
}

function drawTickets() {
	ticketStates = [];
	playerStates = createPlayerStates();

	for (let player = 0; player < PLAYERS; player++) {
		const currentPlayerTickets = document.getElementById('player-tickets-' + player);
		currentPlayerTickets.innerHTML = '';

		for (let i = 0; i < TICKETS_BY_PLAYER; i++) {
			const ticketCanvas = document.createElement('canvas');
			currentPlayerTickets.appendChild(ticketCanvas);
			ticketCanvas.className = 'ticket-Canvas';
			ticketCanvas.width = ticket.width;
			ticketCanvas.height = ticket.height;

			ticketCanvas.getContext('2d').drawImage(ticket, 0, 0, ticketCanvas.width, ticketCanvas.height);
			const ticketNums = createTicketNums();
			drawTicketNums(ticketCanvas, ticketNums);
			ticketStates.push({
				canvas: ticketCanvas,
				marked: Array.from(
					{length: TICKET_ROWS},
					() => Array(TICKET_COLUMNS).fill(false),
				),
				nums: ticketNums,
				player,
			});
		}
	}
}

function showResult(winningPlayers) {
	gameOver = true;
	resultWindowText.innerText = getWinMessage(winningPlayers);
	resultWindow.style.display = 'block';
}

function startGame() {
	resetBarNums();
	gameOver = false;
	overlayText.innerText = '';
	resultWindow.style.display = 'none';
	drawTickets();
}

nextBarrelBtn.onclick = () => {
	if (gameOver) {
		return;
	}

	const barNum = getBarNum();

	if (barNum === undefined) {
		return;
	}

	const selectedBarNum = Number(barNum);
	overlayText.innerText = selectedBarNum;
	markBarNum(ticketStates, playerStates, cross, selectedBarNum);

	const winningPlayers = getWinningPlayers(playerStates);
	if (winningPlayers.length > 0) {
		showResult(winningPlayers);
	}
}

newGameBtn.onclick = startGame;

startGame();
