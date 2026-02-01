import TicTacToeState from './state.js';
import CellState from './state.js';

export default class Renderer {
	constructor(boardState) {
		// boardState must be TicTacToeState
		this.boardState = boardState;
	}
	function render() {
		for (let ind = 0; ind < this.boardState.cellStates.length; ind++) {
			const value = this.boardState.cellStates[ind];
			if (value == CellState.EMPTY) {
				console.log(' ');
			}

			else if (value == CellState.CROSS) {
				console.log('x');
			}

			else if (value == CellState.CIRCLE) {
				console.log('o');
			}
		}
	}
};