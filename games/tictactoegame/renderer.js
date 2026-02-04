import {TicTacToeState, CellState} from './state.js';
// import {img} from './imageprovider.js';

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
img = new Image();
img.src = '../../../images/redcross01.png';

export class Renderer {
	constructor(boardState) {
		// boardState must be TicTacToeState
		this.boardState = boardState;
	}

	render() {

		for (let ind = 0; ind < this.boardState.cellStates.length; ind++) {
			const value = this.boardState.cellStates[ind];
			if (value == CellState.EMPTY) {
				console.log('empty');
			}

			else if (value == CellState.CROSS) {
				console.log('x');
				img.addEventListener('load', () => {
					ctx.drawImage(img, 0, 0); // Draw the image at coordinates (0, 0)
				});

			}

			else if (value == CellState.CIRCLE) {
				console.log('o');
			}
		}
	}
};
