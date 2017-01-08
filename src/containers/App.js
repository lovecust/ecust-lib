/**
 * Created by fisher on 1/6/17.
 */

'use strict';

import React  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from './Main';
import AppTheme from './../components/AppTheme';

const muiTheme = getMuiTheme(AppTheme);

class App extends React.Component {

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<Main/>
			</MuiThemeProvider>
		);
	}
}

export default App;
