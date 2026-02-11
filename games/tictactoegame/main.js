import {TicTacToeState, CellState, TurnState} from './state.js';
import {Drawer} from './drawer.js';
import {loadImage} from './imageloader.js';

let boardState = new TicTacToeState();
let boardDrawer = new Drawer(boardState);
let boardTurn = 1;
let onclick = 3;
let onclick = onclick2;
// boardState.cellStates[2] = CellState.CROSS;
// boardState.cellStates[5] = CellState.CIRCLE;
// boardState.cellStates[7] = CellState.CROSS;


if (boardState.cellStates[onclick] == CellState.EMPTY /* or " == 0" ? */) {
	boardState.cellStates[onclick] = CellState.CROSS;
	if (boardTurn == 1) {
		boardState.turnStates[onclick] = TurnState.CROSS;
		boardTurn = 2;
	}

	else {
		boardState.turnStates[onclick] = TurnState.CIRCLE;
		boardTurn = 1;
	}
}

else {
	console.log('delete_this');
}


const canvas = document.getElementById('boardCanvas');
const canvasContext2d = canvas.getContext('2d');


// Define image sources in the order you want them drawn (background first)

const imageUrls = [
	'../../images/gamesimages/tictactoeimages/tictactoeprocessingimages/tictactoefield.jpg', // Background
	'../../images/gamesimages/tictactoeimages/tictactoeprocessingimages/redcross01.png',     // Cross
	'../../images/gamesimages/tictactoeimages/tictactoeprocessingimages/circleblue.png'  // Circle
];

// Load all images (they load in parallel but we wait for all)
const [background, cross, circle] = await Promise.all(
	imageUrls.map(loadImage)
);

boardDrawer.draw(canvasContext2d, background, cross, circle);
