// import {TicTacToeState} from './state.js';
// import {canvasContext2d, background, cross, circle} from './main.js';

export class CellDetection {
	constructor(clickArea, onCall) {
		this.onCall = onCall;
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
			let cellIdx;

// make brackets in if & make by percentages

			if ((x > 58 && x < 110) && (y > 12 && y < 46)) {
				cellIdx = 0;
			}

			else if ((x > 119 && x < 178) && (y > 12 && y < 46)) {
				cellIdx = 1;
			}


			else if ((x > 184 && x < 229) && (y > 12 && y < 46)) {
				cellIdx = 2;
			}


			else if ((x > 58 && x < 113) && (y > 52 && y < 89)) {
				cellIdx = 3;
			}

			else if ((x > 119 && x < 178) && (y > 52 && y < 89)) {
				cellIdx = 4;
			}

			else if ((x > 184 && x < 229) && (y > 52 && y < 89)) {
				cellIdx = 5;
			}

			else if ((x > 58 && x < 113) && (y > 97 && y < 137)) {
				cellIdx = 6;
			}

			else if ((x > 119 && x < 178) && (y > 97 && y < 137)) {
				cellIdx = 7;
			}

			else if ((x > 184 && x < 229) && (y > 97 && y < 137)) {
				cellIdx = 8;
			}

			this.onCall(cellIdx);
		})
        }
};

// everything's working, but there's one problem: AI wrote that clickArea must be "var", but it is "const" and works
