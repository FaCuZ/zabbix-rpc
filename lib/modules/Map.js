/**
* @constructs Map
*/
const Map = function (req) {
	this.req = req
}


/**
* The method allows to retrieve maps according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all maps generated.
*/
Map.prototype.get = function (params = []) {
	return this.req.jsonrpc('map.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new map.  
*
* @param {Object<array>} params - Maps to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created maps.
*/
Map.prototype.create = function (params) {
	return this.req.jsonrpc('map.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete maps.
*
* @param {Object<array>} params - IDs of the maps to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted maps.
*/
Map.prototype.delete = function (params) {
	return this.req.jsonrpc('map.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing map. 
*
* @param {Object<array>} params - Map properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated maps.
*/
Map.prototype.update = function (params) {
	return this.req.jsonrpc('map.update', params)
		.then(data => data.result)
}


module.exports = Map