import React, { useState } from 'react';
import { Card, Player, suits, ranks } from './types';

const Game: React.FC = () => {
	const [gameStarted, setGameStarted] = useState<boolean>(false);
	const [currentTurn, setCurrentTurn] = useState<number>(0);
	const [players, setPlayers] = useState<Player[]>([]);

	const startNewGame = () => {
		setCurrentTurn(0);
		setGameStarted(true);
		initializePlayers;
	};

	const initializePlayers = () => {
		let shuffled_deck: Card[] = [];

		suits.forEach((suit) => {
			ranks.forEach((rank) => {
				shuffled_deck.push({ suit, rank });
			});
		});
		shuffled_deck = shuffled_deck.sort(() => Math.random() - 0.5);

		const new_players: Player[] = Array.from({ length: 4 }, (_, i) => {
			const hand: Card[] = shuffled_deck.slice(i * 13, (i + 1) * 13);
			return {
				id: i,
				hand: hand,
			};
		});

		setPlayers(new_players);
	};

	return (
		<div>
			{gameStarted ? (
				<div>
					<h2>Current Turn: Player {currentTurn + 1}</h2>
					<button onClick={() => {}}>Play Hand</button>
				</div>
			) : (
				<button onClick={startNewGame}>Start New Game</button>
			)}
		</div>
	);
};

export default Game;
