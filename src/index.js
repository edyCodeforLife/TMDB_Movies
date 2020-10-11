import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Router } from 'react-router-dom';
import 'regenerator-runtime/runtime'
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './redux/store';
export const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
	</Provider>,
document.getElementById("app")
);