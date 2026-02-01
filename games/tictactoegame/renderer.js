import TicTacToeState from './state.js';

export default class Renderer {
	constructor(boardState) {
		// boardState must be TicTacToeState
		this.boardState = boardState;
	}
	function render() {
		for (let ind = 0; ind < this.boardState.cellStates.length; ind++) {
			const value = this.boardState.cellStates[ind];
			if value == CellStates.EMPTY:
			
		}
	};
};