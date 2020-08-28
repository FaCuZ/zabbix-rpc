const ScreenItem = require('./ScreenItem')

/**
* @constructs Screen
*/
const Screen = function (req) {
	this.req = req
	
	this.item = new ScreenItem(this.req)
}


/**
* The method allows to retrieve screens according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all screens generated.
*/
Screen.prototype.get = function (params = []) {
	return this.req.jsonrpc('screen.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new screen.  
*
* @param {Object<array>} params - Screens to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created screens.
*/
Screen.prototype.create = function (params) {
	return this.req.jsonrpc('screen.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete screens.
*
* @param {Object<array>} params - IDs of the screens to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted screens.
*/
Screen.prototype.delete = function (params) {
	return this.req.jsonrpc('screen.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing screen. 
*
* @param {Object<array>} params - Screen properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated screens.
*/
Screen.prototype.update = function (params) {
	return this.req.jsonrpc('screen.update', params)
		.then(data => data.result)
}


module.exports = Screen
