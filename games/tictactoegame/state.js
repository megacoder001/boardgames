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
};


/*
const container = document.getElementById('imageContainer');
const overlayImage = document.getElementById('overlayImage');

container.addEventListener('click', () => {
    overlayImage.style.display = 'block'; // Show image02.png inside image01.jpg
}); */
