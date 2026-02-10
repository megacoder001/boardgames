import {TicTacToeState, CellState} from './state.js';

export class Drawer {
	constructor(boardState) {
		// boardState must be TicTacToeState
		this.boardState = boardState;
	}

	draw(canvasContext2d, background, cross, circle) {
		canvasContext2d.drawImage(background, 0, 0, 300, 150);

		let indCountX = 0 // important for x coordinates
		let indCountY = 0 // important for y coordinates
		let coordinateX = 0 // default coordinate x
		let coordinateY = 3 // default coordinate

		for (let ind = 0; ind < this.boardState.cellStates.length; ind++) {
			const value = this.boardState.cellStates[ind];

			coordinateX = 65 * (indCountX + 1) // write it in the end

			if (indCountX == 3) {
				coordinateX = 65;
				indCountX = 0;
			}

			if (indCountY == 3) {
				coordinateY = 50;
			}

			else if (indCountY == 6) {
				coordinateY = 95;
			}


			indCountX += 1 // write in the end after coordinatex
			indCountY += 1 // write in the end with indcountx



			if (value == CellState.EMPTY) {
				console.log('empty');
			}

			else if (value == CellState.CROSS) {
				console.log('x');
				canvasContext2d.drawImage(cross, coordinateX, coordinateY, 45, 45);
			}

			else if (value == CellState.CIRCLE) {
				console.log('o');
				canvasContext2d.drawImage(circle, coordinateX, coordinateY, 45, 45);
			}
		}
	}
};
