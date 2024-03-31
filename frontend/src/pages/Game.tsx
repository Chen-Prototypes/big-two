// BigTwoGame.tsx
import React, { useState } from 'react';
import { Card, Player, Suit, Rank } from './types';

const Game: React.FC = () => {
	const [currentTurn, setCurrentTurn] = useState<number>(0);
	const [gameStarted, setGameStarted] = useState<boolean>(false);

	const startNewGame = () => {
		setCurrentTurn(0);
		setGameStarted(true);
	};

	return (
		<div>
			<h1>Big Two</h1>
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
