/**
* @constructs GraphPrototype
*/
const GraphPrototype = function (req) {
	this.req = req
}


/**
* The method allows to retrieve graph prototypes according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all graph prototypes generated.
*/
GraphPrototype.prototype.get = function (params = []) {
	return this.req.jsonrpc('graphprototype.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new graph prototype.  
*
* @param {Object<array>} params - Graph prototypes to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created graph prototypes.
*/
GraphPrototype.prototype.create = function (params) {
	return this.req.jsonrpc('graphprototype.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete graph prototypes.
*
* @param {Object<array>} params - IDs of the graph prototypes to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted graph prototypes.
*/
GraphPrototype.prototype.delete = function (params) {
	return this.req.jsonrpc('graphprototype.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing graph prototype. 
*
* @param {Object<array>} params - Graph prototype properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated graph prototypes.
*/
GraphPrototype.prototype.update = function (params) {
	return this.req.jsonrpc('graphprototype.update', params)
		.then(data => data.result)
}


module.exports = GraphPrototype
