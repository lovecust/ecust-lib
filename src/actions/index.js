/**
 * Created by fisher at 2:15 PM on 1/8/17.
 *
 * Library actions.
 */

'use strict';

import LocalStorageUtil from '../utils/LocalStorageUtil';
import Library from './../../network/ecust/Library'


export const ACTION_DO_REFRESH_DATA = 'ACTION_DO_REFRESH_DATA';
export const ACTION_ON_DATA_REFRESHED = 'ACTION_ON_DATA_REFRESHED';
export const ACTION_DO_SHOW_INDICATOR = 'ACTION_DO_SHOW_INDICATOR';
export const ACTION_DO_HIDE_INDICATOR = 'ACTION_DO_HIDE_INDICATOR';

/**
 * Trigger to refresh data.
 */
export function doRefreshData() {
	return dispatch => {
		dispatch(doShowIndicator());
		Library.status().then(status => {
			console.log('refreshed data', status);
			LocalStorageUtil.setCache(status);
			dispatch(doHideIndicator());
			dispatch(onDataRefreshed(status));
		}).catch(ex => {
			console.error(ex);
			dispatch(doHideIndicator());
		});
	};
}


/**
 * Listener when data refreshed.
 */
export function onDataRefreshed(status) {
	return {
		type: ACTION_ON_DATA_REFRESHED,
		status: status
	};
}

export function doShowIndicator() {
	return {type: ACTION_DO_SHOW_INDICATOR};
}

export function doHideIndicator() {
	return {type: ACTION_DO_HIDE_INDICATOR};
}
