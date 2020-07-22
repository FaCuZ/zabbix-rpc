/**
* @constructs Maintenance
*/
const Maintenance = function (req) {
	this.req = req
}


/**
* The method allows to retrieve maintenances according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all maintenances generated.
*/
Maintenance.prototype.get = function (params = []) {
	return this.req.jsonrpc('maintenance.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new maintenance.  
*
* @param {Object<array>} params - Maintenances to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created maintenances.
*/
Maintenance.prototype.create = function (params) {
	return this.req.jsonrpc('maintenance.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete maintenances.
*
* @param {Object<array>} params - IDs of the maintenances to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted maintenances.
*/
Maintenance.prototype.delete = function (params) {
	return this.req.jsonrpc('maintenance.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing maintenance. 
*
* @param {Object<array>} params - Maintenance properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated maintenances.
*/
Maintenance.prototype.update = function (params) {
	return this.req.jsonrpc('maintenance.update', params)
		.then(data => data.result)
}


module.exports = Maintenance