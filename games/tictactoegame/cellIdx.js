import {TicTacToeState} from './state.js';
// import {canvasContext2d, background, cross, circle} from './main.js';

let boardState = new TicTacToeState();

export class cellDetection {
	cellIdx = 0;
	clickArea = document.getElementById('canvasIdxDetection');
	coordinatesDetection() {
		this.clickArea.addEventListener('click', function(event) {
		this.cellIdx;
			var x = event.clientX;
			var y = event.clientY;

			console.log('X: ' + x + ', Y: ' + y);

// make brackets in if & make by percentages

			if (x > 185 && x < 358 && y > 225 && y < 327) {
				this.cellIdx = 0;
				boardState.nextTurn(this.cellIdx);
//				boardDrawer.draw(canvasContext2d, background, cross, circle);
			}
			return this.cellIdx;

		})
		console.log('I\'m alive!')
        }
};

// everything's working, but there's one problem: AI wrote that clickArea must be "var", but it is "const" and works
