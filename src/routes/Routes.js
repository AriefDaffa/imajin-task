import React from 'react';
import { BrowserRouter, Routes as Routing, Route } from 'react-router-dom';
import { EditBooks, Home, HomeDetails } from '../pages';

const Routes = () => {
	return (
		<BrowserRouter>
			<Routing>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/books/:id" element={<HomeDetails />} />
				<Route
					exact
					path="/books/:authorId/edit/:postId"
					element={<EditBooks />}
				/>
			</Routing>
		</BrowserRouter>
	);
};

export default Routes;
