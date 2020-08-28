/**
* @constructs ItemPrototype
*/
const ItemPrototype = function (req) {
	this.req = req
}


/**
* The method allows to retrieve item prototypes according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all item prototypes generated.
*/
ItemPrototype.prototype.get = function (params = []) {
	return this.req.jsonrpc('itemprototype.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new item prototype.  
*
* @param {Object<array>} params - Item prototypes to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created item prototypes.
*/
ItemPrototype.prototype.create = function (params) {
	return this.req.jsonrpc('itemprototype.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete item prototypes.
*
* @param {Object<array>} params - IDs of the item prototypes to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted item prototypes.
*/
ItemPrototype.prototype.delete = function (params) {
	return this.req.jsonrpc('itemprototype.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing item prototype. 
*
* @param {Object<array>} params - Item prototype properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated item prototypes.
*/
ItemPrototype.prototype.update = function (params) {
	return this.req.jsonrpc('itemprototype.update', params)
		.then(data => data.result)
}


module.exports = ItemPrototype
