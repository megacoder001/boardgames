const NOTES = [
	{
		code: 'C',
		name: 'До',
		file: 'C3.flac',
	},
	{
		code: 'C#',
		name: 'До#',
		file: 'C%233.flac',
	},
	{
		code: 'D',
		name: 'Ре',
		file: 'D3.flac',
	},
	{
		code: 'D#',
		name: 'Ре#',
		file: 'D%233.flac',
	},
	{
		code: 'E',
		name: 'Ми',
		file: 'E3.flac',
	},
	{
		code: 'F',
		name: 'Фа',
		file: 'F3.flac',
	},
	{
		code: 'F#',
		name: 'Фа#',
		file: 'F%233.flac',
	},
	{
		code: 'G',
		name: 'Соль',
		file: 'G3.flac',
	},
	{
		code: 'G#',
		name: 'Соль#',
		file: 'G%233.flac',
	},
	{
		code: 'A',
		name: 'Ля',
		file: 'A3.flac',
	},
	{
		code: 'A#',
		name: 'Ля#',
		file: 'A%233.flac',
	},
	{
		code: 'B',
		name: 'Си',
		file: 'B3.flac',
	},
];

const NOTES_PATH = '../../audio/sound_effects/games_sounds/melody_sounds/notes/';

const newNoteBtn = document.getElementById('new-note');
const repeatNoteBtn = document.getElementById('repeat-note');
const gameStatus = document.getElementById('game-status');
const score = document.getElementById('score');
const pianoKeys = document.querySelectorAll('.piano-key');

const noteByCode = {};
let currentNote = null;
let correctAnswers = 0;
let wrongAnswers = 0;

for (const note of NOTES) {
	note.audio = new Audio(NOTES_PATH + note.file);
	noteByCode[note.code] = note;
}

function getRandomNote() {
	return NOTES[Math.floor(Math.random() * NOTES.length)];
}

function clearKeyStates() {
	for (const key of pianoKeys) {
		key.classList.remove('selected', 'correct', 'wrong');
	}
}

function updateScore() {
	score.innerText = 'Верно: ' + correctAnswers + ' | Ошибки: ' + wrongAnswers;
}

function playNote(note) {
	note.audio.pause();
	note.audio.currentTime = 0;

	const playResult = note.audio.play();
	if (playResult !== undefined) {
		playResult.catch(() => {
			gameStatus.innerText = 'Браузер не дал проиграть звук. Нажми кнопку ещё раз.';
		});
	}
}

function startRound() {
	clearKeyStates();
	currentNote = getRandomNote();
	repeatNoteBtn.disabled = false;
	newNoteBtn.innerText = 'Новая нота';
	gameStatus.innerText = 'Какая нота звучит?';
	playNote(currentNote);
}

function repeatCurrentNote() {
	if (currentNote === null) {
		return;
	}

	playNote(currentNote);
}

function selectKey(key) {
	if (currentNote === null) {
		gameStatus.innerText = 'Сначала нажми "Сыграть ноту".';
		return;
	}

	const selectedNote = noteByCode[key.dataset.note];

	clearKeyStates();
	key.classList.add('selected');

	if (selectedNote.code !== currentNote.code) {
		wrongAnswers++;
		key.classList.add('wrong');
		gameStatus.innerText = 'Не та нота. Попробуй ещё раз.';
		updateScore();
		return;
	}

	correctAnswers++;
	key.classList.add('correct');
	gameStatus.innerText = 'Верно: ' + currentNote.name + '! Нажми "Новая нота".';
	updateScore();
	currentNote = null;
	repeatNoteBtn.disabled = true;
}

newNoteBtn.onclick = startRound;
repeatNoteBtn.onclick = repeatCurrentNote;

for (const key of pianoKeys) {
	key.onclick = () => selectKey(key);
}

updateScore();
