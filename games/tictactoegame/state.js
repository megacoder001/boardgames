const CellState = {
	EMPTY: 0,
	CROSS: 1,
	CIRCLE: 2
};
export default CellState;


const TurnState = {
	CROSS: 1,
	CIRCLE: 2,
};

export default class TicTacToeState {
	const cellStates = Array(9).fill(CellState.EMPTY);
	let turnState = TurnState.CROSS;
};


/*
const container = document.getElementById('imageContainer');
const overlayImage = document.getElementById('overlayImage');

container.addEventListener('click', () => {
    overlayImage.style.display = 'block'; // Show image02.png inside image01.jpg
}); */
