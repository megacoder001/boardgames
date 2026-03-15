function getBarNum() {
	return Math.random() * (1, 90) + 1;
}

barNum = new getBarNum();
usedNums = [1::90];

while (barNum in usedNums) {
	barNum = getBarNum();
}
