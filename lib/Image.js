/**
* @constructs Image
*/
const Image = function (req) {
	this.req = req
}


/**
* The method allows to retrieve images according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all images generated.
*/
Image.prototype.get = function (params = []) {
	return this.req.jsonrpc('image.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new image.  
*
* @param {Object<array>} params - Images to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created images.
*/
Image.prototype.create = function (params) {
	return this.req.jsonrpc('image.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete images.
*
* @param {Object<array>} params - IDs of the images to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted images.
*/
Image.prototype.delete = function (params) {
	return this.req.jsonrpc('image.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing image. 
*
* @param {Object<array>} params - Image properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated images.
*/
Image.prototype.update = function (params) {
	return this.req.jsonrpc('image.update', params)
		.then(data => data.result)
}


module.exports = Image