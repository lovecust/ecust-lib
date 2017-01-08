/**
 * Created by fisher at 6:22 PM on 1/8/17.
 */

'use strict';

import LocalStorageUtil from '../utils/LocalStorageUtil';
import {
	ACTION_DO_REFRESH_DATA,
	ACTION_ON_DATA_REFRESHED
} from '../actions';

export default function counter(state = {status: LocalStorageUtil.getCache()}, action) {
	switch (action.type) {
		case ACTION_ON_DATA_REFRESHED:
			return {status: action.status};
		case ACTION_DO_REFRESH_DATA:
			return state;
		default:
			return state;
	}
}


