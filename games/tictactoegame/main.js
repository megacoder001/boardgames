import {TicTacToeState, CellState} from './state.js';
import {Renderer} from './renderer.js';

let boardState = new TicTacToeState();

let boardRenderer = new Renderer(boardState);

boardState.cellStates[2] = CellState.CROSS;
boardState.cellStates[5] = CellState.CIRCLE;
boardState.cellStates[7] = CellState.CROSS;
// boardRenderer.render();

const canvas = document.getElementById('boardCanvas');
const canvasContext2d = canvas.getContext('2d');
const boardImage = new Image();

boardImage.addEventListener('load', () => {
	canvasContext2d.drawImage(boardImage, 0, 0, 1000, 600); // Draw the image at coordinates (0, 0)
	boardRenderer.render(canvasContext2d)
});

boardImage.src = '../../images/gamesimages/tictactoeimages/tictactoeprocessingimages/tictactoefield.jpg';


/* const img2 = new Image();

img2.addEventListener('load', () => {
    canvasContext2d.drawImage(img2, 100, 100, 100, 300); // Draw the image at coordinates (0, 0)
});

img2.src = '../../images/gamesimages/tictactoeimages/tictactoeprocessingimages/redcross01.png';
*/
