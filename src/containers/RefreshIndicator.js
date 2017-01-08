/**
 * Created by fisher at 3:52 PM on 1/8/17.
 */

'use strict';

import {connect} from 'react-redux';
import * as ActionCreators from '../actions';
import RefreshIndicator from '../components/RefreshIndicator';

/** @namespace state.indicatorStatus */

export default connect(
	(state) => ({status: state.indicator.status}),
	ActionCreators
)(RefreshIndicator);


