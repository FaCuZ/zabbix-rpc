/**
* @constructs Valuemap
*/
const Valuemap = function (req) {
	this.req = req
}


/**
* The method allows to retrieve value maps according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all value maps generated.
*/
Valuemap.prototype.get = function (params = []) {
	return this.req.jsonrpc('valuemap.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new value map.  
*
* @param {Object<array>} params - Value maps to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created value maps.
*/
Valuemap.prototype.create = function (params) {
	return this.req.jsonrpc('valuemap.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete value maps.
*
* @param {Object<array>} params - IDs of the value maps to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted value maps.
*/
Valuemap.prototype.delete = function (params) {
	return this.req.jsonrpc('valuemap.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing value map. 
*
* @param {Object<array>} params - Value map properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated value maps.
*/
Valuemap.prototype.update = function (params) {
	return this.req.jsonrpc('valuemap.update', params)
		.then(data => data.result)
}


module.exports = Valuemap
