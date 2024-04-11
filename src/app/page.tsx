'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './globals.css';
import './Home.module.css';

const instructions = [
	{
		step: 'Role Selection',
		details:
			'Each player should choose a role. One of the players must be the Dragon, and the other players may choose any of the 4 other roles (Mage, Hammer (Tank), Healer, Knight), with none of the 5 roles repeating.',
	},
	{
		step: 'Setting Up Cards',
		details:
			'Once roles are chosen, each player will pick up their respective role’s movement deck (8 cards total) and HP cards.',
	},
	{
		step: 'First Moves',
		details:
			'The Dragon makes the first move in each game. Then, each Hero will take a turn, placing one of their 3 movement cards to either attack the Dragon, defend in some manner, OR use their special ability.',
	},
	{
		step: 'Rotation',
		details:
			'The game will continue, with all of the players taking a turn, until either the Dragon is defeated (Heroes win), or all Heroes are defeated (Dragon wins!).',
	},
];

const Page: React.FC = () => {
	return (
		<div className="flex flex-col justify-start items-center h-screen text-center pt-8">
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-white leading-none mb-2 mx-auto w-full max-w-screen-lg"
			>
				HEROES VS DRAGON
			</motion.h1>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 2.3 }}
				className="text-md md:text-lg lg:text-xl font-light text-white max-w-3xl mt-16 leading-relaxed text-left"
			>
				Heroes vs Dragon is an RPG turn-based card game that features 5
				different roles to choose from. There are 4 "Heroes" - a Knight, a Mage,
				a Healer, and a Hammer - and finally, there is the Dragon.
			</motion.p>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 3.3 }}
				className="text-md md:text-lg lg:text-xl font-light text-white max-w-3xl mt-16 leading-relaxed text-left"
			>
				In this game, prepare to wield your sword as the Knight, brew potions as
				the Healer to heal your team, brave the Dragon’s attacks with your
				mighty shields as the Hammer, or chant encantations as the mysterious
				Mage, and if you dare - play the magnificent Dragon who fears no Hero.
			</motion.p>
			<div className="grid grid-cols-2 gap-4 w-full max-w-4xl mx-auto mt-8 p-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 2 }}
					className="bg-gray-800 p-4 rounded-lg shadow-lg"
				>
					<h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-4">
						Setting Up Cards
					</h2>
					<p className="text-md md:text-lg lg:text-xl font-light text-white">
						Once roles are chosen, each player will pick up their respective
						role’s movement deck (8 cards total) and HP cards.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 2 }}
					className="bg-gray-800 p-4 rounded-lg shadow-lg"
				>
					<h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-4">
						Role Selection
					</h2>
					<p className="text-md md:text-lg lg:text-xl font-light text-white">
						Each player should choose a role. One of the players must be the
						Dragon, and the other players may choose any of the 4 other roles
						(Mage, Hammer (Tank), Healer, Knight), with none of the 5 roles
						repeating.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 2 }}
					className="bg-gray-800 p-4 rounded-lg shadow-lg"
				>
					<h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-4">
						Role Selection
					</h2>
					<p className="text-md md:text-lg lg:text-xl font-light text-white">
						Each player should choose a role. One of the players must be the
						Dragon, and the other players may choose any of the 4 other roles
						(Mage, Hammer (Tank), Healer, Knight), with none of the 5 roles
						repeating.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 2 }}
					className="bg-gray-800 p-4 rounded-lg shadow-lg"
				>
					<h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-4">
						Role Selection
					</h2>
					<p className="text-md md:text-lg lg:text-xl font-light text-white">
						Each player should choose a role. One of the players must be the
						Dragon, and the other players may choose any of the 4 other roles
						(Mage, Hammer (Tank), Healer, Knight), with none of the 5 roles
						repeating.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Page;
