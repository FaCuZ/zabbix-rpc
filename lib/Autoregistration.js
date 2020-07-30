/**
* @constructs Autoregistration
* @version 5.0+
*/
const Autoregistration = function (req) {
	this.req = req
}


/**
* The method allows to retrieve autoregistration object according to the given parameters. 
* @version 5.0+
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<Object>} Returns autoregistration object. 
*/
Autoregistration.prototype.get = function (params = []) {
	return this.req.jsonrpc('autoregistration.get', params)
		.then(data => data.result)
}


/**
* This method allows to update existing autoregistration.
* @version 5.0+
*
* @param {Object<array>} params - Autoregistration properties to be updated.
* @returns {Promise<array>} Returns boolean true as result on successful update. 
*/
Autoregistration.prototype.update = function (params) {
	return this.req.jsonrpc('autoregistration.update', params)
		.then(data => data.result)
}


module.exports = Autoregistration
