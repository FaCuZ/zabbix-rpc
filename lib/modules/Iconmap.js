/**
* @constructs Iconmap
*/
const Iconmap = function (req) {
	this.req = req
}


/**
* The method allows to retrieve icon maps according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all icon maps generated.
*/
Iconmap.prototype.get = function (params = []) {
	return this.req.jsonrpc('iconmap.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new icon map.  
*
* @param {Object<array>} params - Icon maps to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created icon maps.
*/
Iconmap.prototype.create = function (params) {
	return this.req.jsonrpc('iconmap.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete icon maps.
*
* @param {Object<array>} params - IDs of the icon maps to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted icon maps.
*/
Iconmap.prototype.delete = function (params) {
	return this.req.jsonrpc('iconmap.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing icon map. 
*
* @param {Object<array>} params - Icon map properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated icon maps.
*/
Iconmap.prototype.update = function (params) {
	return this.req.jsonrpc('iconmap.update', params)
		.then(data => data.result)
}


module.exports = Iconmap
