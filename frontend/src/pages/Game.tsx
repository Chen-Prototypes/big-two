// BigTwoGame.tsx
import React, { useState } from 'react';
import { Card, Player, Suit, Rank, GameState } from './types';

const Game: React.FC = () => {
	const [gameStarted, setGameStarted] = useState<boolean>(false);
	const [currentTurn, setCurrentTurn] = useState<number>(0);
	const [players, setPlayers] = useState<Player[]>([]);

	const startNewGame = () => {
		setCurrentTurn(0);
		setGameStarted(true);
		setPlayers(initializePlayers);
	};

	const initializePlayers = (): Player[] => {
		let shuffled_deck: Card[] = [];

		return [];
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
