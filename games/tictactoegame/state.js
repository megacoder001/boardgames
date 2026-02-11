export const CellState = {
	EMPTY: 0,
	CROSS: 1,
	CIRCLE: 2
};


const TurnState = {
	CROSS: 1,
	CIRCLE: 2
};

export class TicTacToeState {
	cellStates = Array(9).fill(CellState.EMPTY);
	turnState = TurnState.CROSS;

	nextTurn(cellIdx) {
		if (this.cellStates[cellIdx] == CellState.EMPTY) {
		        this.cellStates[cellIdx] = CellState.CROSS;

		        if (this.turnState == TurnState.CROSS) {
		                this.cellStates[cellIdx] = CellState.CROSS;
		                this.turnState = TurnState.CIRCLE;
		        }

		        else {
		                this.cellStates[cellIdx] = CellState.CIRCLE;
		                this.turnState = TurnState.CROSS;
		        }
		}

		else {
		        console.log('occupied');
		}
	}
};
