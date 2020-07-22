const TriggerPrototype = require('./TriggerPrototype')
const TriggerDependencies = require('./TriggerDependencies')


/**
* @constructs Trigger
*/
const Trigger = function (req) {
	this.req = req

	this.prototype = new TriggerPrototype(this.req)
	this.dependencies = new TriggerDependencies(this.req)
}


/**
* The method allows to retrieve triggers according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all triggers generated.
*/
Trigger.prototype.get = function (params = []) {
	return this.req.jsonrpc('trigger.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new trigger.  
*
* @param {Object<array>} params - Triggers to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created triggers.
*/
Trigger.prototype.create = function (params) {
	return this.req.jsonrpc('trigger.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete triggers.
*
* @param {Object<array>} params - IDs of the triggers to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted triggers.
*/
Trigger.prototype.delete = function (params) {
	return this.req.jsonrpc('trigger.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing trigger. 
*
* @param {Object<array>} params - Trigger properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated triggers.
*/
Trigger.prototype.update = function (params) {
	return this.req.jsonrpc('trigger.update', params)
		.then(data => data.result)
}


module.exports = Trigger
