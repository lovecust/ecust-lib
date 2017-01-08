/**
 * Created by fisher at4:22 PM on 1/7/17.
 *
 * Lovecust.Ecust.Library module API library.
 */

'use strict';

require('whatwg-fetch');
let Constants = require('./Constants');

class Library {

}

/**
 * Library current status.
 */
Library.status = () => {
	return doFetch(Constants.URL_LIBRARY_STATUS)
};

/**
 * Library status history.
 */
Library.statusStatistics = () => {
	return doFetch(Constants.URL_LIBRARY_STATUS_STATISTICS)
};

let toJSON = (response) => response.json();

let doFetch = (path) => {
	return fetch(path, {
		credentials: 'include'
	}).then(toJSON);
};

module.exports = Library;
