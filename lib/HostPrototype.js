/**
* @constructs HostPrototype
*/
const HostPrototype = function (req) {
	this.req = req
}


/**
* The method allows to retrieve host prototypes according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all host prototypes generated.
*/
HostPrototype.prototype.get = function (params = []) {
	return this.req.jsonrpc('hostprototype.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new host prototype.  
*
* @param {Object<array>} params - Host prototypes to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created host prototypes.
*/
HostPrototype.prototype.create = function (params) {
	return this.req.jsonrpc('hostprototype.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete host prototypes.
*
* @param {Object<array>} params - IDs of the host prototypes to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted host prototypes.
*/
HostPrototype.prototype.delete = function (params) {
	return this.req.jsonrpc('hostprototype.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing host prototype. 
*
* @param {Object<array>} params - Host prototype properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated host prototypes.
*/
HostPrototype.prototype.update = function (params) {
	return this.req.jsonrpc('hostprototype.update', params)
		.then(data => data.result)
}


module.exports = HostPrototype
