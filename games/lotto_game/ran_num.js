// refactor to class if you want to use it from several places
function createUnusedNums() {
	const unusedNums = {};

	for (let ind = 1; ind <= 90; ind++) {
		unusedNums[ind] = true;
	}

	return unusedNums;
}

let unusedNums = createUnusedNums();

export function getBarNum() {
	const keys = Object.keys(unusedNums);
	const barNum = keys[Math.floor(Math.random() * keys.length)];

	delete unusedNums[barNum];
	return barNum;
}

export function resetBarNums() {
	unusedNums = createUnusedNums();
}
