export const CellState = { // 
	EMPTY: 0,
	CROSS: 1,
	CIRCLE: 2
};


const TurnState = {
	CROSS: 1,
	CIRCLE: 2
};

export class TicTacToeState { // checking is field empty
	cellStates = Array(9).fill(CellState.EMPTY);
	turnState = TurnState.CROSS;
};
