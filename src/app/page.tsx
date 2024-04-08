import React from 'react';
import './globals.css';

const Page: React.FC = () => {
	return (
		<div className="flex flex-col justify-start items-center h-screen text-center pt-8">
			<h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-white leading-none mb-2 mx-auto w-full max-w-screen-lg">
				HEROES VS DRAGON
			</h1>
			<p className="text-md md:text-lg lg:text-xl font-light text-white max-w-3xl mt-16 leading-relaxed text-left">
				Heroes vs Dragon is an RPG turn-based card game that features 5
				different roles to choose from. There are 4 "Heroes" - a Knight, a Mage,
				a Healer, and a Hammer - and finally, there is the Dragon.
			</p>
		</div>
	);
};

export default Page;
