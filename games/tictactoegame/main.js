import {TicTacToeState} from './state.js';
import {Renderer} from './renderer.js';

let boardState = new TicTacToeState();

let boardRenderer = new Renderer(boardState);

boardRenderer.render();
boardState.cellStates[2] = CellState.CROSS;
boardState.cellStates[5] = CellState.CIRCLE;
boardState.cellSTATES[8] = CellState.CROSS;
boardRenderer.render();