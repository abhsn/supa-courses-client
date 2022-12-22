import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

function App() {
	return (
		<React.Fragment>
			<RouterProvider router={routes}>
			</RouterProvider>
			<Toaster position='top-center' />
		</React.Fragment>
	);
}

export default App;
