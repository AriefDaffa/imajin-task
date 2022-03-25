import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

//setup react query
const queryClient = new QueryClient();

//setup redux persist
let persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<QueryClientProvider client={queryClient}>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</QueryClientProvider>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
