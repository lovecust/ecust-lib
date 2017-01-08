/**
 * Created by fisher at4:33 PM on 1/7/17.
 *
 * Lovecust.Ecust module Constant fields.
 */

'use strict';

class Constants {

}

Constants.SERVER_ADDRESS = 'http://apis.lovecust.com';
Constants.PATH_ECUST_LIBRARY = Constants.SERVER_ADDRESS + '/apis/ecust/library';
Constants.URL_LIBRARY_STATUS = Constants.PATH_ECUST_LIBRARY + '/status';
Constants.URL_LIBRARY_STATUS_STATISTICS = Constants.URL_LIBRARY_STATUS + '/statistics?interval=1&limit=500';


module.exports = Constants;
