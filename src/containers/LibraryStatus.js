/**
 * Created by fisher at 2:23 PM on 1/8/17.
 *
 * Library status.
 */

'use strict';

import {connect} from 'react-redux';
import * as ActionCreators from '../actions';
import LibraryStatus from '../components/LibraryStatus';

export default connect(
	state => ({status: state.library.status}),
	ActionCreators
)(LibraryStatus);

