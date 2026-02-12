import {TicTacToeState, CellState} from './state.js';
import {Drawer} from './drawer.js';
import {loadImage} from './imageloader.js';
import {cellDetection} from './cellIdx.js';

//
let boardState = new TicTacToeState();

// 
let boardDrawer = new Drawer(boardState);

// Getting coordinates
let clickIdx = new cellDetection();
var clickArea = document.getElementById('canvasIdxDetection');

//
boardState.nextTurn(clickIdx.cellDetectionFunction(clickArea));
boardState.nextTurn(2);
boardState.nextTurn(5);
boardState.nextTurn(7);

// Getting element's id
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
