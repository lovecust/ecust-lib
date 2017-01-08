/**
 * Created by fisher at 2:13 PM on 1/8/17.
 */

'use strict';

import {connect} from 'react-redux';
import * as ActionCreators from '../actions';
import AppBar from '../components/AppBar';


// AppBar only dispatch event.
export default connect(
	null,
	ActionCreators
)(AppBar);

