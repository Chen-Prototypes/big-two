import React from 'react';

const Home: React.FC = () => {
	return (
		<div>
			<h1 className="text-2xl font-extrabold font-raleway">HEROES VS DRAGON</h1>
			<p className="text-base font-avenir">
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

export default Home;
