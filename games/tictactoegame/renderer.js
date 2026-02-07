import {TicTacToeState, CellState} from './state.js';
// import {img} from './imageprovider.js';

// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// const overlayImage doesn't work: img.src = '../../images\gamesimages\tictactoeimages\tictactoeprocessingimages/redcross01.png';


export class Renderer {
	constructor(boardState) {
		// boardState must be TicTacToeState
		this.boardState = boardState;
	}

	render(canvasContext2d, background, cross, circle) {
		canvasContext2d.drawImage(background, 0, 0, 1000, 600);
		canvasContext2d.drawImage(cross, 100, 0, 150, 150);
		canvasContext2d.drawImage(circle, 300, 0, 150, 150);

		for (let ind = 0; ind < this.boardState.cellStates.length; ind++) {
			const value = this.boardState.cellStates[ind];
			if (value == CellState.EMPTY) {
				console.log('empty');
			}

			else if (value == CellState.CROSS) {
				console.log('x');
				// backgroundimg.onload = () => {
				//	canvasContext2d.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // Draw background image
//				let backgroundImage = document.createElement('img');
//				backgroundImage.src = '../../images/gamesimages/tictactoeimages/tictactoefield.jpg';
//				document.body.appendChild(backgroundImage);
//				document.querySelector('.jpg').appendChild(img);

			}

			else if (value == CellState.CIRCLE) {
				console.log('o');
			}
		}
	}
};
