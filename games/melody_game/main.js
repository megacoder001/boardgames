import {t} from '../../common/i18n.js';

const NOTES = [
	{
		code: 'C',
		nameKey: 'note.C',
		file: 'C3.flac',
	},
	{
		code: 'C#',
		nameKey: 'note.C#',
		file: 'C%233.flac',
	},
	{
		code: 'D',
		nameKey: 'note.D',
		file: 'D3.flac',
	},
	{
		code: 'D#',
		nameKey: 'note.D#',
		file: 'D%233.flac',
	},
	{
		code: 'E',
		nameKey: 'note.E',
		file: 'E3.flac',
	},
	{
		code: 'F',
		nameKey: 'note.F',
		file: 'F3.flac',
	},
	{
		code: 'F#',
		nameKey: 'note.F#',
		file: 'F%233.flac',
	},
	{
		code: 'G',
		nameKey: 'note.G',
		file: 'G3.flac',
	},
	{
		code: 'G#',
		nameKey: 'note.G#',
		file: 'G%233.flac',
	},
	{
		code: 'A',
		nameKey: 'note.A',
		file: 'A3.flac',
	},
	{
		code: 'A#',
		nameKey: 'note.A#',
		file: 'A%233.flac',
	},
	{
		code: 'B',
		nameKey: 'note.B',
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
let currentStatusKey = 'melody.initialStatus';
let currentStatusReplacements = {};
let lastCorrectNote = null;
let newNoteButtonKey = 'melody.playNote';
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
	score.innerText = t('melody.score', {
		correct: correctAnswers,
		wrong: wrongAnswers,
	});
}

function setStatus(key, replacements = {}) {
	currentStatusKey = key;
	currentStatusReplacements = replacements;
	gameStatus.innerText = t(key, replacements);
}

function getNoteName(note) {
	return t(note.nameKey);
}

function playNote(note) {
	note.audio.pause();
	note.audio.currentTime = 0;

	const playResult = note.audio.play();
	if (playResult !== undefined) {
		playResult.catch(() => {
			setStatus('melody.browserBlocked');
		});
	}
}

function startRound() {
	clearKeyStates();
	currentNote = getRandomNote();
	repeatNoteBtn.disabled = false;
	newNoteButtonKey = 'melody.newNote';
	newNoteBtn.innerText = t(newNoteButtonKey);
	setStatus('melody.question');
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
		setStatus('melody.startFirst');
		return;
	}

	const selectedNote = noteByCode[key.dataset.note];

	clearKeyStates();
	key.classList.add('selected');

	if (selectedNote.code !== currentNote.code) {
		wrongAnswers++;
		key.classList.add('wrong');
		setStatus('melody.wrong');
		updateScore();
		return;
	}

	correctAnswers++;
	key.classList.add('correct');
	lastCorrectNote = currentNote;
	setStatus('melody.correct', {
		note: getNoteName(currentNote),
	});
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
setStatus(currentStatusKey, currentStatusReplacements);

window.addEventListener('languagechange', () => {
	newNoteBtn.innerText = t(newNoteButtonKey);
	if (currentStatusKey === 'melody.correct' && lastCorrectNote !== null) {
		currentStatusReplacements = {
			note: getNoteName(lastCorrectNote),
		};
	}

	gameStatus.innerText = t(currentStatusKey, currentStatusReplacements);
	updateScore();
});
