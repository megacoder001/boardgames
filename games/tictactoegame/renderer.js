import {TicTacToeState, CellState} from './state.js';
// import {img} from './imageprovider.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const backgroundImage = new Image();
const backgroundImage.src = '../../images/gamesimages/tictactoeimages/tictactoefield.jpg';

// const overlayImage
// doesn't work: img.src = '../../images\gamesimages\tictactoeimages\tictactoeprocessingimages/redcross01.png';

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
				backgroundimg.onload = () => {
					ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // Draw background image
				});

			}

			else if (value == CellState.CIRCLE) {
				console.log('o');
			}
		}
	}
};
