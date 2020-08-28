/**
* @constructs Action
*/
const Action = function(req) {
	this.req = req
}


/**
* The method allows to retrieve actions according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve discovery actions.
*/
Action.prototype.get = function (params = []) {
	return this.req.jsonrpc('action.get', params)
		.then(data => data.result)
}


/**
* This method allows to create new actions.  
*
* @param {Object<array>} params - Actions to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created actions.
*/
Action.prototype.create = function (params) {
	return this.req.jsonrpc('action.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete actions.
*
* @param {Object<array>} params - IDs of the actions to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted actions.
*/
Action.prototype.delete = function (params) {
	return this.req.jsonrpc('action.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing actions. 
*
* @param {Object<array>} params - Action properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated actions.
*/
Action.prototype.update = function (params) {
	return this.req.jsonrpc('action.update', params)
		.then(data => data.result)
}



module.exports = Action
