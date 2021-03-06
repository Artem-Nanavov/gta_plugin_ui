import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

import './nullstyles.css';
import '../fonts/fonts.css';

render(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>,
	document.getElementById('app'),
);
