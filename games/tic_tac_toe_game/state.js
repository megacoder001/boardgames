export const CellState = {
	EMPTY: 0,
	CROSS: 1,
	CIRCLE: 2
};

export const WinnerState = {
	NONE: 0,
	CROSS: 1,
	CIRCLE: 2,
	TIE: 3
};

const TurnState = {
	CROSS: 1,
	CIRCLE: 2
};

export class TicTacToeState {
	cellStates = Array(9).fill(CellState.EMPTY);
	turnState = TurnState.CROSS;
	winner = WinnerState.NONE;


	nextTurn(cellIdx) {
//		console.log('Congratulations! ' + cellStates[0] + ' Won!'); // cellStates[0]'s the mistake

		console.log('cellIdx = ' + cellIdx)

		if (this.cellStates[cellIdx] == CellState.EMPTY) {
		        this.cellStates[cellIdx] = CellState.CROSS;
//			console.log('It\'s first time')

		        if (this.turnState == TurnState.CROSS) {
		                this.cellStates[cellIdx] = CellState.CROSS;
		                this.turnState = TurnState.CIRCLE;
		        }

		        else {
		                this.cellStates[cellIdx] = CellState.CIRCLE;
		                this.turnState = TurnState.CROSS;
		        }
			this.whoIsWinner();
		}

		else {
		        console.log('occupied');
		}
	}

	whoIsWinner() {

		// cellStates[0]


		if (((this.cellStates[0] == this.cellStates[4] && this.cellStates[4] == this.cellStates[8])
		||
		(this.cellStates[0] == this.cellStates[3] && this.cellStates[3] == this.cellStates[6])
		||
		(this.cellStates[0] == this.cellStates[1] && this.cellStates[1] == this.cellStates[2])) && (this.cellStates[0] != CellState.EMPTY)) {

			if (this.cellStates[0] == CellState.CROSS) {
				this.winner = WinnerState.CROSS;
				console.log('1 variant, winner - CROSS!');
			}

			else {
				this.winner = WinnerState.CIRCLE;
				console.log('1 variant, winner - CIRCLE!');
			}
		}

		//cellStates[2]

		else if ((this.cellStates[2] == this.cellStates[4] && this.cellStates[4] == this.cellStates[6]) && (this.cellStates[2] != CellState.EMPTY)) {
			if (this.cellStates[2] == CellState.CROSS) {
				this.winner = WinnerState.CROSS;
				console.log('2 variant, winner - CROSS!');
			}

			else {
				this.winner = WinnerState.CIRCLE;
				console.log('2 variant, winner - CIRCLE!');
			}
		}

		// cellStates[4]

		else if (((this.cellStates[4] == this.cellStates[1] && this.cellStates[1] == this.cellStates[7])
		||
		(this.cellStates[4] == this.cellStates[3] && this.cellStates[3] == this.cellStates[5])) && (this.cellStates[4] != CellState.EMPTY)) {
			if (this.cellStates[4] == CellState.CROSS) {
				this.winner = WinnerState.CROSS;
				console.log('3 variant, winner - CROSS!');
			}

			else {
				this.winner = WinnerState.CIRCLE;
				console.log('3 variant, winner - CIRCLE!');
			}
		}

		//cellStates[8]

		else if (((this.cellStates[8] == this.cellStates[5] && this.cellStates[5] == this.cellStates[2])
		||
		(this.cellStates[8] == this.cellStates[7] && this.cellStates[7] == this.cellStates[6])) && (this.cellStates[8] != CellState.EMPTY)) {
			if (this.cellStates[8] == CellState.CROSS) {
				this.winner = WinnerState.CROSS;
				console.log('4 variant, winner - CROSS!');
			}

			else {
				this.winner = WinnerState.CIRCLE;
				console.log('4 variant, winner - CIRCLE!');

			}
		}

		else if (this.cellStates.every(state => state != CellState.EMPTY) && this.winner == WinnerState.NONE) {
			console.log('No one\'s the winner!');
			this.winner = WinnerState.TIE;
		}

		console.log('WinnerState = ' + this.winner);
	}

	cleaningCompany() {
		this.winner = WinnerState.NONE;
		this.cellStates = Array(9).fill(CellState.EMPTY);
		this.turnState = TurnState.CROSS;
	}
};
