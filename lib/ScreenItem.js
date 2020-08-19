/**
* @constructs ScreenItem
*/
const ScreenItem = function (req) {
	this.req = req
}


/**
* The method allows to retrieve screen items according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all screen items generated.
*/
ScreenItem.prototype.get = function (params = []) {
	return this.req.jsonrpc('screenitem.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new screen item.  
*
* @param {Object<array>} params - Screen items to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created screen items.
*/
ScreenItem.prototype.create = function (params) {
	return this.req.jsonrpc('screenitem.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete screen items.
*
* @param {Object<array>} params - IDs of the screen items to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted screen items.
*/
ScreenItem.prototype.delete = function (params) {
	return this.req.jsonrpc('screenitem.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing screen item. 
*
* @param {Object<array>} params - Screen item properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated screen items.
*/
ScreenItem.prototype.update = function (params) {
	return this.req.jsonrpc('screenitem.update', params)
		.then(data => data.result)
}


/**
* This method allows to update screen items in the given screen cells. If a cell is empty, a new screen item will be created. 
*
* @param {Object<array>} params - Screen item properties to be updated. 
* @returns {Promise<array>} Returns an object containing the IDs of the updated and created screen items.
*/
ScreenItem.prototype.updatebyposition = function (params) {
	return this.req.jsonrpc('screenitem.updatebyposition', params)
		.then(data => data.result)
}


/**
* This method allows to update screen items in the given screen cells. If a cell is empty, a new screen item will be created. 
*
* @param {Object<array>} params - Screen item properties to be updated. 
* @returns {Promise<array>} Returns an object containing the IDs of the updated and created screen items.
*/
ScreenItem.prototype.updatebypos = function (params) {
	return this.req.jsonrpc('screenitem.updatebyposition', params)
		.then(data => data.result)
}


module.exports = ScreenItem
