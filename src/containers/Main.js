/**
 * Created by fisher at 20:02 on 2017-01-07.
 *
 * App Main Module.
 */

'use strict';

import React from 'react';
import AppBar from './AppBar';
import RefreshIndicator from './RefreshIndicator';
import LibraryStatus from './LibraryStatus'

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
class Main extends React.Component {

	render() {
		return (
			<div>
				<AppBar />
				<RefreshIndicator/>
				<LibraryStatus/>
			</div>
		);
	}
}

export default Main;

