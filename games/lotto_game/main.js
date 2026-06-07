import {loadImage} from '../tic_tac_toe_game/image_loader.js';
import {getBarNum} from './ran_num.js';

const TICKET_ROWS = 3;
const TICKET_COLUMNS = 9;
const NUMS_IN_ROW = 5;
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

function drawTicketNums(ticketCanvas, ticketNums) {
	const context = ticketCanvas.getContext('2d');
	const gridLeft = ticketCanvas.width * 0.028;
	const gridTop = ticketCanvas.height * 0.069;
	const cellWidth = ticketCanvas.width * 0.944 / TICKET_COLUMNS;
	const cellHeight = ticketCanvas.height * 0.862 / TICKET_ROWS;

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

// creating ran num
const overlayText = document.getElementById('barrel-result-text');
const nextBarrelBtn = document.getElementById('next_barrel');

nextBarrelBtn.onclick = () => {
	const barNum = getBarNum();
	overlayText.innerText = barNum;
}

// let overlay-text = barNum

const imageUrls = [
	'../../images/games_images/lotto_images/lotto_processing_images/ticket.bmp' // ticket
]

const [ticket] = await Promise.all (
	imageUrls.map(loadImage)
);

// printing ticket

for (let player = 0; player < 2; player++) {
	const currentPlayerTickets = document.getElementById('player-tickets-' + player);


	for (let i = 0; i < 3; i++) {
		const ticketCanvas = document.createElement('canvas');
		currentPlayerTickets.appendChild(ticketCanvas);
		ticketCanvas.className = 'ticket-Canvas';
		ticketCanvas.width = ticket.width;
		ticketCanvas.height = ticket.height;

		ticketCanvas.getContext('2d').drawImage(ticket, 0, 0, ticketCanvas.width, ticketCanvas.height);
		drawTicketNums(ticketCanvas, createTicketNums());
	}
}
