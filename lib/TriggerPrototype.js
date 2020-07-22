/**
* @constructs TriggerPrototype
*/
const TriggerPrototype = function (req) {
	this.req = req
}


/**
* The method allows to retrieve trigger prototypes according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all trigger prototypes generated.
*/
TriggerPrototype.prototype.get = function (params = []) {
	return this.req.jsonrpc('triggerprototype.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new trigger prototype.  
*
* @param {Object<array>} params - TriggerPrototypes to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created trigger prototypes.
*/
TriggerPrototype.prototype.create = function (params) {
	return this.req.jsonrpc('triggerprototype.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete trigger prototypes.
*
* @param {Object<array>} params - IDs of the trigger prototypes to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted trigger prototypes.
*/
TriggerPrototype.prototype.delete = function (params) {
	return this.req.jsonrpc('triggerprototype.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing trigger prototype. 
*
* @param {Object<array>} params - TriggerPrototype properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated trigger prototypes.
*/
TriggerPrototype.prototype.update = function (params) {
	return this.req.jsonrpc('triggerprototype.update', params)
		.then(data => data.result)
}


module.exports = TriggerPrototype