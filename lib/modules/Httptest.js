/**
* @constructs Httptest
*/
const Httptest = function (req) {
	this.req = req
}


/**
* The method allows to retrieve web scenarios according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all web scenarios generated.
*/
Httptest.prototype.get = function (params = []) {
	return this.req.jsonrpc('httptest.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new web scenario.  
*
* @param {Object<array>} params - Web scenarios to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created web scenarios.
*/
Httptest.prototype.create = function (params) {
	return this.req.jsonrpc('httptest.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete web scenarios.
*
* @param {Object<array>} params - IDs of the web scenarios to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted web scenarios.
*/
Httptest.prototype.delete = function (params) {
	return this.req.jsonrpc('httptest.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing web scenario. 
*
* @param {Object<array>} params - Web scenario properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated web scenarios.
*/
Httptest.prototype.update = function (params) {
	return this.req.jsonrpc('httptest.update', params)
		.then(data => data.result)
}


module.exports = Httptest
