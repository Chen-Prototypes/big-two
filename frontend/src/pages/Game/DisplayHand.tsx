import React, { useState } from 'react';
import { Card, Player } from '../types';

const DisplayHand = ({ player }: { player: Player }) => {
	const [selectedCards, setSelectedCards] = useState<number[]>([]);

	const toggleCardSelection = (index: number) => {
		setSelectedCards((prevSelection) => {
			if (prevSelection.includes(index))
				return prevSelection.filter((i) => i !== index);
			else return [...prevSelection, index];
		});
	};

	return (
		<>
			{player.hand.map((card: Card, index: number) => {
				let cardStyle = {};
				if (selectedCards.includes(index))
					cardStyle = {
						fontWeight: 'bold',
						backgroundColor: '#D3D3D3',
					};

				return (
					<div
						key={index}
						style={{ ...cardStyle, cursor: 'pointer' }}
						onClick={() => toggleCardSelection(index)}
					>
						{card.rank} of {card.suit}
					</div>
				);
			})}
		</>
	);
};

export default DisplayHand;
