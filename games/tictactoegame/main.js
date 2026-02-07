import {TicTacToeState, CellState} from './state.js';
import {Renderer} from './renderer.js';

let boardState = new TicTacToeState();

let boardRenderer = new Renderer(boardState);

boardState.cellStates[2] = CellState.CROSS;
boardState.cellStates[5] = CellState.CIRCLE;
boardState.cellStates[7] = CellState.CROSS;
// boardRenderer.render();

const canvas = document.getElementById('boardCanvas');
const ctx = canvas.getContext('2d');
const img = new Image();

img.addEventListener('load', () => {
	ctx.drawImage(img, 0, 0, 1000, 600); // Draw the image at coordinates (0, 0)
	boardRenderer.render(ctx)
});

img.src = '../../images/gamesimages/tictactoeimages/tictactoeprocessingimages/tictactoefield.jpg';


/* const img2 = new Image();

img2.addEventListener('load', () => {
    ctx.drawImage(img2, 100, 100, 100, 300); // Draw the image at coordinates (0, 0)
});

img2.src = '../../images/gamesimages/tictactoeimages/tictactoeprocessingimages/redcross01.png';
*/
