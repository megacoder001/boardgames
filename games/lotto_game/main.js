import {loadImage} from '../tic_tac_toe_game/image_loader.js';
// import {barNum} from './ran_num.js';

// let overlay-text = barNum

const imageUrls = [
	'../../images/games_images/lotto_images/lotto_processing_images/ticket.bmp' // ticket
]

const [ticket] = await Promise.all (
	imageUrls.map(loadImage)
);

// printing ticket

const nextBarrel = document.getElementById('next_barrel');

for (let player = 0; player < 2; player++) {
	const currentPlayerTickets = document.getElementById('player-tickets-' + player);


	for (let i = 0; i < 3; i++) {
		const ticketCanvas = document.createElement('canvas');
//		document.body.insertBefore(ticketCanvas, nextBarrel);
		currentPlayerTickets.appendChild(ticketCanvas);
		ticketCanvas.className = 'ticket-Canvas';
		ticketCanvas.getContext('2d').drawImage(ticket, 0, 0, ticketCanvas.width, ticketCanvas.height);
	}
}
