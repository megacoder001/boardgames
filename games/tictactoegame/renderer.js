import {TicTacToeState, CellState} from './state.js';
import {overlayImage.src} from './imageprovider.js';

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
				overlayImage.onload = () => {
					ctx.drawImage(overlayImage, 50, 50, 200, 200); // Position and size of overlay
				}

			}

			else if (value == CellState.CIRCLE) {
				console.log('o');
                      	}
               	}
        }
};
