import { Routes, Route } from 'react-router-dom';


const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Notes />} />
			</Routes>
		</>
	);
};

export default App;
