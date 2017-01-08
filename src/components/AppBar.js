/**
 * Created by fisher at 20:02 on 2017-01-07.
 *
 * Ecust Library App Bar.
 */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import Strings from './../resources/Strings';

class LibAppBar extends React.Component {

	constructor(props) {
		super(props);
		this.closeDrawer = this.closeDrawer.bind(this);
		this.toggleDrawer = this.toggleDrawer.bind(this);
		this.state = {drawerStatus: false};
	}

	toggleDrawer() {
		this.setState({drawerStatus: !this.state.drawerStatus});
	}

	closeDrawer() {
		this.setState({drawerStatus: false});
	}

	render() {
		console.log('rendering AppBar.');
		const {doRefreshData} = this.props;
		// iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
		// onLeftIconButtonTouchTap={this.toggleDrawer}
		{/*<Drawer*/}
		// docked={false}
		// open={this.state.drawerStatus}
		// onRequestChange={(drawerStatus) => this.setState({drawerStatus: drawerStatus})}
		// >
		// </Drawer>
		return (
			<div>
				<AppBar title={Strings.title}
				        iconElementLeft={<p></p>}
				        iconElementRight={<IconButton><NavigationRefresh/></IconButton>}
				        onRightIconButtonTouchTap={doRefreshData}
				/>
			</div>
		);
	}
}

export default LibAppBar;
