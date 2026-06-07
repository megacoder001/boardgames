const LANGUAGE_KEY = 'boardgames-language';
const SUPPORTED_LANGUAGES = ['ru', 'en'];
let activeLanguage = null;

const translations = {
	ru: {
		'a11y.pianoKeyboard': 'Клавиатура пианино',
		'choose.backMainMenu': 'Назад в главное меню',
		'choose.title': 'Выбор игры',
		'game.lotto': 'Лото',
		'game.melody': 'Мелодия',
		'game.ticTacToe': 'Крестики-нолики',
		'global.company': 'Board Games Inc.',
		'global.english': 'English',
		'global.exitMainMenu': 'В главное меню',
		'global.language': 'Язык',
		'global.russian': 'Русский',
		'lotto.bothWon': 'Оба игрока победили одновременно!',
		'lotto.completedCards': 'У {player} игрока полностью {filledWord} {count} {cardWord} из {total}!',
		'lotto.gameEnded': 'Игра закончилась!',
		'lotto.lowerPlayer': 'Нижний',
		'lotto.lowerPlayerGenitive': 'нижнего',
		'lotto.newGame': 'Начать новую игру',
		'lotto.nextBarrel': 'Следующий бочонок',
		'lotto.oneCard': 'карта',
		'lotto.oneFilled': 'заполнена',
		'lotto.severalCards': 'карты',
		'lotto.severalFilled': 'заполнены',
		'lotto.singleWon': '{player} игрок победил!',
		'lotto.score': 'Счёт: Верхний {upper} | Нижний {lower}',
		'lotto.title': 'Лото',
		'lotto.upperPlayer': 'Верхний',
		'lotto.upperPlayerGenitive': 'верхнего',
		'main.chooseGame': 'Выбрать игру',
		'main.projectInfo': 'Информация о проекте',
		'main.title': 'Board Games Inc.',
		'main.welcome': 'Добро пожаловать в главное меню!',
		'melody.browserBlocked': 'Браузер не дал проиграть звук. Нажми кнопку ещё раз.',
		'melody.correct': 'Верно: {note}! Нажми "Новая нота".',
		'melody.initialStatus': 'Нажми "Сыграть ноту", послушай звук и выбери клавишу.',
		'melody.newNote': 'Новая нота',
		'melody.playNote': 'Сыграть ноту',
		'melody.question': 'Какая нота звучит?',
		'melody.repeat': 'Повторить',
		'melody.score': 'Верно: {correct} | Ошибки: {wrong}',
		'melody.startFirst': 'Сначала нажми "Сыграть ноту".',
		'melody.title': 'Мелодия',
		'melody.wrong': 'Не та нота. Попробуй ещё раз.',
		'note.A': 'Ля',
		'note.A#': 'Ля#',
		'note.B': 'Си',
		'note.C': 'До',
		'note.C#': 'До#',
		'note.D': 'Ре',
		'note.D#': 'Ре#',
		'note.E': 'Ми',
		'note.F': 'Фа',
		'note.F#': 'Фа#',
		'note.G': 'Соль',
		'note.G#': 'Соль#',
		'ticTacToe.closeResult': 'Понятно',
		'ticTacToe.crossWon': 'Крестики победили!',
		'ticTacToe.circleWon': 'Нолики победили!',
		'ticTacToe.crossScoreName': 'Крестики',
		'ticTacToe.circleScoreName': 'Нолики',
		'ticTacToe.score': 'Счёт: {cross} {crossScore} | {circle} {circleScore}',
		'ticTacToe.tie': 'Ничья!',
		'ticTacToe.title': 'Крестики-нолики',
	},
	en: {
		'a11y.pianoKeyboard': 'Piano keyboard',
		'choose.backMainMenu': 'Back to Main Menu',
		'choose.title': 'Choosing Menu',
		'game.lotto': 'Lotto',
		'game.melody': 'Melody Game',
		'game.ticTacToe': 'Tic-Tac-Toe',
		'global.company': 'Board Games Inc.',
		'global.english': 'English',
		'global.exitMainMenu': 'Exit to Main Menu',
		'global.language': 'Language',
		'global.russian': 'Русский',
		'lotto.bothWon': 'Both players won at the same time!',
		'lotto.completedCards': '{player} player has fully completed {count} {cardWord} out of {total}!',
		'lotto.gameEnded': 'The game is over!',
		'lotto.lowerPlayer': 'Lower',
		'lotto.lowerPlayerGenitive': 'lower',
		'lotto.newGame': 'Start new game',
		'lotto.nextBarrel': 'Next barrel',
		'lotto.oneCard': 'card',
		'lotto.oneFilled': 'completed',
		'lotto.severalCards': 'cards',
		'lotto.severalFilled': 'completed',
		'lotto.singleWon': '{player} player won!',
		'lotto.score': 'Score: Upper {upper} | Lower {lower}',
		'lotto.title': 'Lotto',
		'lotto.upperPlayer': 'Upper',
		'lotto.upperPlayerGenitive': 'upper',
		'main.chooseGame': 'Choose the game',
		'main.projectInfo': 'Project information',
		'main.title': 'Board Games Inc.',
		'main.welcome': 'Welcome to Main Menu!',
		'melody.browserBlocked': 'The browser blocked audio playback. Press the button again.',
		'melody.correct': 'Correct: {note}! Press "New note".',
		'melody.initialStatus': 'Press "Play note", listen, and choose a key.',
		'melody.newNote': 'New note',
		'melody.playNote': 'Play note',
		'melody.question': 'Which note is playing?',
		'melody.repeat': 'Repeat',
		'melody.score': 'Correct: {correct} | Mistakes: {wrong}',
		'melody.startFirst': 'Press "Play note" first.',
		'melody.title': 'Melody Game',
		'melody.wrong': 'Wrong note. Try again.',
		'note.A': 'A',
		'note.A#': 'A#',
		'note.B': 'B',
		'note.C': 'C',
		'note.C#': 'C#',
		'note.D': 'D',
		'note.D#': 'D#',
		'note.E': 'E',
		'note.F': 'F',
		'note.F#': 'F#',
		'note.G': 'G',
		'note.G#': 'G#',
		'ticTacToe.closeResult': "I've got",
		'ticTacToe.crossWon': 'CROSS WON!!!',
		'ticTacToe.circleWon': 'CIRCLE WON!!!',
		'ticTacToe.crossScoreName': 'Crosses',
		'ticTacToe.circleScoreName': 'Noughts',
		'ticTacToe.score': 'Score: {cross} {crossScore} | {circle} {circleScore}',
		'ticTacToe.tie': 'TIE! =(',
		'ticTacToe.title': 'Tic-Tac-Toe',
	},
};

function getDefaultLanguage() {
	const browserLanguage = navigator.language || '';

	return browserLanguage.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

function getSavedLanguage() {
	try {
		return localStorage.getItem(LANGUAGE_KEY);
	}
	catch {
		return null;
	}
}

function saveLanguage(language) {
	try {
		localStorage.setItem(LANGUAGE_KEY, language);
	}
	catch {
		// The page can still be translated even if the browser blocks localStorage.
	}
}

export function getLanguage() {
	const savedLanguage = getSavedLanguage();

	if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
		return savedLanguage;
	}

	if (SUPPORTED_LANGUAGES.includes(activeLanguage)) {
		return activeLanguage;
	}

	return getDefaultLanguage();
}

export function t(key, replacements = {}) {
	const language = getLanguage();
	const text = translations[language][key] || translations.en[key] || key;

	return Object.entries(replacements).reduce(
		(result, [name, value]) => result.replaceAll('{' + name + '}', value),
		text,
	);
}

export function setLanguage(language) {
	if (!SUPPORTED_LANGUAGES.includes(language)) {
		return;
	}

	activeLanguage = language;
	saveLanguage(language);
	applyTranslations();
	window.dispatchEvent(new CustomEvent('languagechange', {
		detail: {
			language,
		},
	}));
}

function applyAttributeTranslations() {
	for (const element of document.querySelectorAll('[data-i18n]')) {
		element.textContent = t(element.dataset.i18n);
	}

	for (const element of document.querySelectorAll('[data-i18n-alt]')) {
		element.alt = t(element.dataset.i18nAlt);
	}

	for (const element of document.querySelectorAll('[data-i18n-aria-label]')) {
		element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
	}

	for (const element of document.querySelectorAll('[data-i18n-title]')) {
		element.title = t(element.dataset.i18nTitle);
	}
}

function updateDocumentMetadata() {
	const titleKey = document.documentElement.dataset.i18nTitle;

	if (titleKey !== undefined) {
		document.title = t(titleKey);
	}

	document.documentElement.lang = getLanguage();
}

function createLanguageSelector() {
	if (document.getElementById('language-select')) {
		return;
	}

	const container = document.createElement('div');
	container.className = 'language-selector';

	const label = document.createElement('label');
	label.setAttribute('for', 'language-select');
	label.dataset.i18n = 'global.language';

	const select = document.createElement('select');
	select.id = 'language-select';

	for (const language of SUPPORTED_LANGUAGES) {
		const option = document.createElement('option');
		option.value = language;
		option.dataset.i18n = language === 'ru' ? 'global.russian' : 'global.english';
		select.appendChild(option);
	}

	select.value = getLanguage();
	select.onchange = () => setLanguage(select.value);

	container.append(label, select);
	document.body.prepend(container);
}

function injectLanguageStyles() {
	if (document.getElementById('language-selector-style')) {
		return;
	}

	const style = document.createElement('style');
	style.id = 'language-selector-style';
	style.textContent = `
		.language-selector {
			position: fixed;
			top: 12px;
			right: 12px;
			z-index: 20;
			display: flex;
			align-items: center;
			gap: 8px;
			padding: 8px 10px;
			border-radius: 6px;
			border: 1px solid #263238;
			background: rgba(27, 27, 27, 0.92);
			color: white;
			font-family: Arial, sans-serif;
			font-size: 14px;
			box-shadow: 0 8px 18px rgba(0, 0, 0, 0.28);
		}

		.language-selector select {
			border: 0;
			border-radius: 4px;
			background: #73d2de;
			color: #171717;
			font-size: 14px;
			font-weight: bold;
		}
	`;
	document.head.appendChild(style);
}

export function applyTranslations() {
	updateDocumentMetadata();
	applyAttributeTranslations();

	const languageSelect = document.getElementById('language-select');
	if (languageSelect !== null) {
		languageSelect.value = getLanguage();
	}
}

function initI18n() {
	injectLanguageStyles();
	createLanguageSelector();
	applyTranslations();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initI18n);
}
else {
	initI18n();
}
