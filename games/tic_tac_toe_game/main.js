import {TicTacToeState, CellState} from './state.js';
import {Drawer} from './drawer.js';
import {loadImage} from './image_loader.js';
import {CellDetection} from './cell_idx.js';

//
let boardState = new TicTacToeState();


// Getting coordinates

//

// boardState.nextTurn(clickIdx.coordinatesDetection());


// Getting image's ID
const canvas = document.getElementById('boardCanvas');
const canvasContext2d = canvas.getContext('2d');

//Getting div's ID
const resultWindow = document.getElementById('gameResult');
const resultWindowText = document.getElementById('gameResultInfo');
const resultWindowClose = document.getElementById('gameResultClose');
resultWindowClose.onclick = () => {
// resultWindow.style.width = '0%';
// resultWindow.style.height = '0%';
resultWindow.style.display = 'none';
boardState.cleaningCompany();
boardDrawer.draw();
}

// Define image sources in the order you want them drawn (background first)

const imageUrls = [
	'../../images/games_images/tic_tac_toe_images/tic_tac_toe_processing_images/tic_tac_toe_field.jpg', // Background
	'../../images/games_images/tic_tac_toe_images/tic_tac_toe_processing_images/red_cross01.png',     // Cross
	'../../images/games_images/tic_tac_toe_images/tic_tac_toe_processing_images/circle_blue.png'  // Circle
];

// Load all images (they load in parallel but we wait for all)
const [background, cross, circle] = await Promise.all(
	imageUrls.map(loadImage)
);


let boardDrawer = new Drawer(boardState, canvasContext2d, background, cross, circle, resultWindow, resultWindowClose, resultWindowText);
let clickIdx = new CellDetection(canvas, (cellIdx) => {
	boardState.nextTurn(cellIdx);
	boardDrawer.draw();
});

boardDrawer.draw();
