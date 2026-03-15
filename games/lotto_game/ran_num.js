export function getBarNum() {
	const unusedNums = {};
	for (let ind = 1; ind <= 90; ind++) {
		unusedNums[ind] = true;
	}

	const keys = Object.keys(unusedNums);
	const barNum = keys[Math.floor(Math.random() * keys.length)];

	delete unusedNums[barNum];
	return barNum;
}
