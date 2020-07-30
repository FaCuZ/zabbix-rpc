/**
* @constructs Mediatype
*/
const Mediatype = function (req) {
	this.req = req
}


/**
* The method allows to retrieve media types according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all media types generated.
*/
Mediatype.prototype.get = function (params = []) {
	return this.req.jsonrpc('mediatype.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new media type.  
*
* @param {Object<array>} params - Media types to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created media types.
*/
Mediatype.prototype.create = function (params) {
	return this.req.jsonrpc('mediatype.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete media types.
*
* @param {Object<array>} params - IDs of the media types to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted media types.
*/
Mediatype.prototype.delete = function (params) {
	return this.req.jsonrpc('mediatype.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing media type. 
*
* @param {Object<array>} params - Media type properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated media types.
*/
Mediatype.prototype.update = function (params) {
	return this.req.jsonrpc('mediatype.update', params)
		.then(data => data.result)
}


module.exports = Mediatype
