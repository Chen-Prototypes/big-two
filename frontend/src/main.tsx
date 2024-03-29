import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// NextUI
import { NextUIProvider } from '@nextui-org/react';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Router (for navigation)
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<NextUIProvider>
					<App />
				</NextUIProvider>
			</Provider>
		</Router>
	</React.StrictMode>
);
