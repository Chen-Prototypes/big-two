import React from 'react';
import './globals.css';

const Page: React.FC = () => {
	return (
		<div className="bg-gray-100 p-8">
			<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-raleway text-blue-600">
				HEROES VS DRAGON
			</h1>
			<p className="mt-4 text-lg md:text-xl font-avenir text-gray-700">
				Heroes vs Dragon is an RPG turn-based card game that features 5
				different roles to choose from. There are 4 "Heroes" - a Knight, a Mage,
				a Healer, and a Hammer - and finally, there is the Dragon.
			</p>
			<div>
				{/* If you have a logo image, you can include it like so: */}
				{/* <img src="/path-to-your-logo.png" alt="Heroes vs Dragon Logo" /> */}
			</div>
			{/* Your chevron or other content goes here */}
		</div>
	);
};

export default Page;
