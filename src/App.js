import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

function App() {
	return (
		<React.Fragment>
			<RouterProvider router={routes}>

			</RouterProvider>
		</React.Fragment>
	);
}

export default App;
