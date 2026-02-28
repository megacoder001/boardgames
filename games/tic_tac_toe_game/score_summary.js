export class ScoreCount (boardState) {
	scoreResults = Array(9).fill(0);
	console.log('scoreResults: ' + scoreResults);

	if (boardState.winner == WinnerState.CROSS) {
		scoreResults[0] += 1;
	}

	else if (boardState.winner == WinnerState.CIRCLE) {
		scoreResults[1] += 1;
	}

	else {
		scoreResults[2] += 1;
	}
}
