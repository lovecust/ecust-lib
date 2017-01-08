/**
 * Created by fisher at 22:33 on 2017-01-07.
 *
 * LocalStorage utils.
 */

'use strict';

let LocalStorage = {};
let available = typeof(Storage) !== "undefined";
LocalStorage.available = available;

/**
 * If LocalStorage is available, save a data.
 *
 * @param key{String} Data key.
 * @param value{String} Data value.
 * @param options{Object} Data options.
 */
LocalStorage.set = (key, value, options) => {
	if (!available) {return;}
	let obj = {data: value};
	if (options.expiration) {
		obj.expiration = options.expiration
	}
	localStorage.setItem(key, JSON.stringify(obj));
};

/**
 * Return corresponding data If LocalStorage is available AND data is set AND data is not expired.
 * @param key Data key.
 */
LocalStorage.get = (key) => {
	if (!available) {return;}
	let obj = localStorage.getItem(key);
	if (!obj) {return;}
	obj = JSON.parse(obj);
	if (!obj.expiration || obj.expiration >= +new Date()) {
		return obj.data;
	}
};

export default LocalStorage;
