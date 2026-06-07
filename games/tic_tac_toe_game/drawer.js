import {TicTacToeState, CellState, WinnerState} from './state.js';
import {t} from '../../common/i18n.js';

export class Drawer {
	constructor(boardState, canvasContext2d, background, cross, circle, resultWindow, resultWindowClose, resultWindowText, scoreResultCount) {
		// boardState is TicTacToeState
		this.boardState = boardState;
		this.canvasContext2d = canvasContext2d;
		this.background = background;
		this.cross = cross;
		this.circle = circle;
		this.resultWindow = resultWindow;
		this.resultWindowClose = resultWindowClose;
		this.resultWindowText = resultWindowText;
		this.scoreResultCount = scoreResultCount;
		this.scoreState = {
			circle: 0,
			cross: 0,
		};
		this.resultScored = false;

		window.addEventListener('languagechange', () => {
			if (this.boardState.winner != WinnerState.NONE) {
				this.resultWindowText.textContent = this.getResultText();
			}

			this.updateScoreText();
		});
	}

	getResultText() {
		if (this.boardState.winner == WinnerState.CROSS) {
			return t('ticTacToe.crossWon');
		}

		if (this.boardState.winner == WinnerState.CIRCLE) {
			return t('ticTacToe.circleWon');
		}

		return t('ticTacToe.tie');
	}

	formatScore(score) {
		return String(score);
	}

	updateScoreText() {
		this.scoreResultCount.textContent = t('ticTacToe.score', {
			circle: t('ticTacToe.circleScoreName'),
			circleScore: this.formatScore(this.scoreState.circle),
			cross: t('ticTacToe.crossScoreName'),
			crossScore: this.formatScore(this.scoreState.cross),
		});
	}

	addResultScore() {
		if (this.boardState.winner == WinnerState.CROSS) {
			this.scoreState.cross += 1;
		}
		else if (this.boardState.winner == WinnerState.CIRCLE) {
			this.scoreState.circle += 1;
		}
		else if (this.boardState.winner == WinnerState.TIE) {
			this.scoreState.cross += 0.5;
			this.scoreState.circle += 0.5;
		}

		this.updateScoreText();
	}

	draw() {
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

		if (this.boardState.winner == WinnerState.NONE) {
			this.resultScored = false;
			this.updateScoreText();
			return;
		}

		if (!this.resultScored) {
			this.addResultScore();
			this.resultScored = true;
		}

		this.resultWindow.style.display = 'block';
		this.resultWindowText.textContent = this.getResultText();
	}
};
