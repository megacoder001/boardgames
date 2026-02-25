import {TicTacToeState, CellState, WinnerState} from './state.js';

export class Drawer {
	constructor(boardState, canvasContext2d, background, cross, circle, resultWindow, resultWindowClose, resultWindowText) {
		// boardState is TicTacToeState
		this.boardState = boardState;
		this.canvasContext2d = canvasContext2d;
		this.background = background;
		this.cross = cross;
		this.circle = circle;
		this.resultWindow = resultWindow;
		this.resultWindowClose = resultWindowClose;
		this.resultWindowText = resultWindowText;
	}

	draw() {
		var resultText // I've added it for recently
		this.canvasContext2d.drawImage(this.background, 0, 0, 300, 150);

		let indCountX = 0 // important for x coordinates
		let indCountY = 0 // important for y coordinates
		let coordinateX = 0 // default coordinate x
		let coordinateY = 3 // default coordinate y

		for (let ind = 0; ind < this.boardState.cellStates.length; ind++) {
			const value = this.boardState.cellStates[ind];

			coordinateX = 65 * (indCountX + 1)

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


			indCountX += 1
			indCountY += 1


			if (value == CellState.EMPTY) {
				console.log('empty');
			}

			else if (value == CellState.CROSS) {
				console.log('x');
				this.canvasContext2d.drawImage(this.cross, coordinateX, coordinateY, 45, 45);
			}

			else if (value == CellState.CIRCLE) {
				console.log('o');
				this.canvasContext2d.drawImage(this.circle, coordinateX, coordinateY, 45, 45);
			}
		}

		if (this.boardState.winner != WinnerState.NONE) {
			this.resultWindow.style.display = 'block';

			if (this.boardState.winner == WinnerState.CROSS) {
				resultText = 'CROSS WON!!!';
			}

			else if (this.boardState.winner == WinnerState.CIRCLE) {
				resultText = 'CIRCLE WON!!!';
			}

			else {
				resultText = 'TIE! =(';
			}

			this.resultWindowText.textContent = resultText;
		}
	}
};
