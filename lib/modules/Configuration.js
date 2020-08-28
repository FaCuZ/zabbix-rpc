/**
* @constructs Configuration
*/
const Configuration = function (req) {
	this.req = req
}


/**
* This method allows to export configuration data as a serialized string. 
*
* @param {Object} params - Parameters defining the objects to be exported and the format to use.
* @returns {Promise<array>} Returns a serialized string containing the requested configuration data.
*/
Configuration.prototype.export = function (params = []) {
	return this.req.jsonrpc('configuration.export', params)
		.then(data => data.result)
}


/**
**
* This method allows to import configuration data from a serialized string.
*
* @param {Object<array>} params - Parameters containing the data to import and rules how the data should be handled. 
* @returns {Promise<array>} Returns true if importing has been successful. 
*/
Configuration.prototype.import = function (params) {
	return this.req.jsonrpc('configuration.import', params)
		.then(data => data.result)
}


module.exports = Configuration
