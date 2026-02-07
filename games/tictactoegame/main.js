import {TicTacToeState, CellState} from './state.js';
import {Renderer} from './renderer.js';
import {loadImage} from './imageloader.js';

let boardState = new TicTacToeState();
let boardRenderer = new Renderer(boardState);

boardState.cellStates[2] = CellState.CROSS;
boardState.cellStates[5] = CellState.CIRCLE;
boardState.cellStates[7] = CellState.CROSS;

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

boardRenderer.render(canvasContext2d, background, cross, circle);

