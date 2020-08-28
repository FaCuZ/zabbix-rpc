const ItemPrototype = require('./ItemPrototype')

/**
* @constructs Item
*/
const Item = function (req) {
	this.req = req
	
	this.prototype = new ItemPrototype(this.req)
}


/**
* The method allows to retrieve items according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all items generated.
*/
Item.prototype.get = function (params = []) {
	return this.req.jsonrpc('item.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new item.  
*
* @param {Object<array>} params - Items to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created items.
*/
Item.prototype.create = function (params) {
	return this.req.jsonrpc('item.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete items.
*
* @param {Object<array>} params - IDs of the items to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted items.
*/
Item.prototype.delete = function (params) {
	return this.req.jsonrpc('item.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing item. 
*
* @param {Object<array>} params - Item properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated items.
*/
Item.prototype.update = function (params) {
	return this.req.jsonrpc('item.update', params)
		.then(data => data.result)
}


module.exports = Item
