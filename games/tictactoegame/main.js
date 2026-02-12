import {TicTacToeState, CellState} from './state.js';
import {Drawer} from './drawer.js';
import {loadImage} from './imageloader.js';
// import {cellDetection} from './cellIdx.js';

let boardState = new TicTacToeState();
let boardDrawer = new Drawer(boardState);

// for cellIdx.js
export class cellDetection {
        cellDetectionFunction(clickArea) {
                clickArea.addEventListener('click', function(event) {
                        var x = event.clientX;
                        var y = event.clientY;
                        console.log('X: ' + x + ', Y: ' + y);
                        return x, y;
                })
        }
};


const clickArea = document.getElementById('canvasIdxDetection');
let clickIdx = new cellDetection();

// var clickArea = document.getElementById('canvasIdxDetection');
// const clickArea = document.getElementById('canvasIdxDetection')


boardState.nextTurn(clickIdx.cellDetectionFunction(clickArea));
boardState.nextTurn(2);
boardState.nextTurn(5);
boardState.nextTurn(7);


const canvas = document.getElementById('boardCanvas');
const canvasContext2d = canvas.getContext('2d');


// Define image sources in the order you want them drawn (background first)

const imageUrls = [
	'../../images/gamesimages/tictactoeimages/tictactoeprocessingimages/tictactoefield.jpg', // Background
	'../../images/gamesimages/tictactoeimages/tictactoeprocessingimages/redcross01.png',     // Cross
	'../../images/gamesimages/tictactoeimages/tictactoeprocessingimages/circleblue.png'  // Circle
];

// Load all images (they load in parallel but we wait for all)
const [background, cross, circle] = await Promise.all(
	imageUrls.map(loadImage)
);

boardDrawer.draw(canvasContext2d, background, cross, circle);
