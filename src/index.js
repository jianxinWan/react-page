import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import { Provider } from 'react-redux'
import './common/reset.less';
import App from './components/App/index';
// import routers from 'routers'

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	document.getElementById('app')
);
