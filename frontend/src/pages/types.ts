export type Suit = 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades';

export type Rank =
	| '2'
	| 'A'
	| 'K'
	| 'Q'
	| 'J'
	| '10'
	| '9'
	| '8'
	| '7'
	| '6'
	| '5'
	| '4'
	| '3';

export interface Card {
	suit: Suit;
	rank: Rank;
}

export interface Player {
	id: number;
	hand: Card[];
	isTurn: boolean;
}

export interface GameState {
	players: Player[];
	currentTurn: number;
	lastPlay: {
		playerId: number;
		cards: Card[];
	} | null;
}

export enum HandType {
	Single = 'Single',
	Pair = 'Pair',
	Triple = 'Triple',
	Straight = 'Straight',
	Flush = 'Flush',
	FullHouse = 'FullHouse',
	FourOfAKind = 'FourOfAKind',
	StraightFlush = 'StraightFlush',
	RoyalFlush = 'RoyalFlush',
}

export interface Hand {
	type: HandType;
	cards: Card[];
}

export const rankValues: { [key in Rank]: number } = {
	'2': 15,
	A: 14,
	K: 13,
	Q: 12,
	J: 11,
	'10': 10,
	'9': 9,
	'8': 8,
	'7': 7,
	'6': 6,
	'5': 5,
	'4': 4,
	'3': 3,
};

export const suitValues: { [key in Suit]: number } = {
	Spades: 4,
	Hearts: 3,
	Clubs: 2,
	Diamonds: 1,
};
