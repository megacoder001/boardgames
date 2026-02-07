import {TicTacToeState, CellState} from './state.js';
// import {img} from './imageprovider.js';

export class Renderer {
	constructor(boardState) {
		// boardState must be TicTacToeState
		this.boardState = boardState;
	}

	render(canvasContext2d, background, cross, circle) {
		canvasContext2d.drawImage(background, 0, 0, 300, 150);
//		canvasContext2d.drawImage(cross, 100, 0, 150, 150);
//		canvasContext2d.drawImage(circle, 300, 0, 150, 150);

		let indcountx = 0 // important for x coordinates
		let indcounty = 0 // important for y coordinates
		let coordinatex = 0 // default coordinate x
		let coordinatey = 3 // default coordinate
		for (let ind = 0; ind < this.boardState.cellStates.length; ind++) {
			const value = this.boardState.cellStates[ind];

			coordinatex = 65 * (indcountx + 1) // write it in the end

			if (indcountx == 3) {
				coordinatex = 65;
				indcountx = 0;
			}

			if (indcounty == 3) {
				coordinatey = 50;
			}

			else if (indcounty == 6) {
				coordinatey = 95;
			}


			indcountx += 1 // write in the end after coordinatex
			indcounty += 1 // write in the end with indcountx




			if (value == CellState.EMPTY) {
				console.log('empty');
			}

			else if (value == CellState.CROSS) {
				console.log('x');
				canvasContext2d.drawImage(cross, coordinatex, coordinatey, 45, 45);
			}

			else if (value == CellState.CIRCLE) {
				console.log('o');
			}
		}
	}
};
