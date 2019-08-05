import React from 'react';
import ReactDOM from 'react-dom';

import Store from './store';

import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Store>
		<App />
	</Store>,
	document.getElementById('root')
);

serviceWorker.unregister();
