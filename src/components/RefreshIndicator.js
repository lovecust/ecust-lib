/**
 * Created by fisher at 20:02 on 2017-01-07.
 */

import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
	container: {
		position: 'absolute',
		right: 0,
		left: 0,
		top: '25%',
		textAlign: 'center'
	},
	refresh: {
		display: 'inline-block',
		position: 'relative',
	},
};

let color = '#FF9800';

class AppRefreshIndicator extends React.Component {

	constructor(props) {
		super(props);
		this.state = {status: 'hide'}
	}

	render() {
		let {status} = this.props;
		console.log('rendering RefreshIndicator: ', status);
		return (
			<div style={style.container}>
				<RefreshIndicator
					size={50}
					left={0}
					top={0}
					loadingColor={color}
					status={status}
					style={style.refresh}
				/>
			</div>
		);
	}
}

export default AppRefreshIndicator;


