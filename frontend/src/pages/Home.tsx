import { Button } from '@nextui-org/react';

import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

	const handlePlayClick = () => {
        navigate('/bigtwo');
	};

	return (
		<div
            className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-800 via-blue-900 to-black"
        >
            <Button
                size="lg"
                onClick={handlePlayClick}
                className="text-xl py-5 px-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold shadow-2xl hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-500 opacity-90"
            >
                Play
            </Button>
        </div>
	);
};

export default Home;
