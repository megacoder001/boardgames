// import {TicTacToeState} from './state.js';
// import {canvasContext2d, background, cross, circle} from './main.js';

export class cellDetection {
	constructor(boardState, boardDrawer) {
	this.boardState = boardState;
	this.boardDrawer = boardDrawer;
	this.coordinatesDetection();
	}

	clickArea = document.getElementById('canvasIdxDetection');
	coordinatesDetection() {
		this.clickArea.addEventListener('click', (event) => {
		this.cellIdx;
			var x = event.clientX;
			var y = event.clientY;

			console.log('X: ' + x + ', Y: ' + y);

// make brackets in if & make by percentages

			if (x > 185 && x < 358 && y > 225 && y < 327) {
				let cellIdx = 0;
				this.boardState.nextTurn(cellIdx);
				this.boardDrawer.draw();
			}
//			return this.cellIdx;

		})
		console.log('I\'m alive!')
        }
};

// everything's working, but there's one problem: AI wrote that clickArea must be "var", but it is "const" and works
