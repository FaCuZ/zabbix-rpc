/**
* @constructs Application
*/
const Application = function (req) {
	this.req = req	
	this.mass = new Mass()
}


/**
* The method allows to retrieve applications according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all applications generated.
*/
Application.prototype.get = function (params = []) {
	return this.req.jsonrpc('application.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new application.  
*
* @param {Object<array>} params - Applications to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created applications.
*/
Application.prototype.create = function (params) {
	return this.req.jsonrpc('application.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete applications.
*
* @param {Object<array>} params - IDs of the applications to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted applications.
*/
Application.prototype.delete = function (params) {
	return this.req.jsonrpc('application.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing application. 
*
* @param {Object<array>} params - Application properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated applications.
*/
Application.prototype.update = function (params) {
	return this.req.jsonrpc('application.update', params)
		.then(data => data.result)
}

/**
* @constructs Mass
*/
const Mass = function() {}

/**
* This method allows to simultaneously add multiple items to the given applications.
*
* @param {Object<array>} params - Parameters containing the IDs of the applications to update and the items to add to the applications.
* @returns {Promise<array>} Returns an object containing the IDs of the updated applications.
*/
Mass.prototype.add = function (params) {
	return this.req.jsonrpc('application.massadd', params)
		.then(data => data.result)
}


module.exports = Application
