// import {TicTacToeState} from './state.js';
// import {canvasContext2d, background, cross, circle} from './main.js';

export class CellDetection {
	constructor(boardState, boardDrawer, clickArea) {
		this.boardState = boardState;
		this.boardDrawer = boardDrawer;
		this.clickArea = clickArea;

		this.coordinatesDetection();
	}

	coordinatesDetection() {
		this.clickArea.addEventListener('click', (event) => {
			const rect = this.clickArea.getBoundingClientRect();
			const scaleX = this.clickArea.width / rect.width;
			const scaleY = this.clickArea.height / rect.height;
			const x = (event.clientX - rect.left) * scaleX;
			const y = (event.clientY - rect.top) * scaleY;


			console.log('X: ' + x + ', Y: ' + y);
			let cellIdx;

// make brackets in if & make by percentages

			if ((x > 185 && x < 358) && (y > 225 && y < 327)) {
				cellIdx = 0;
			}
			this.boardState.nextTurn(cellIdx);
			this.boardDrawer.draw();

		})

		console.log('I\'m alive!')
        }
};

// everything's working, but there's one problem: AI wrote that clickArea must be "var", but it is "const" and works
