/**
* @constructs TriggerDependencies
*/
const TriggerDependencies = function (req) {
	this.req = req
}


/**
**
* This method allows to create new trigger dependencies. 
*
* @param {Object<array>} params - Trigger dependencies to create.  
* @returns {Promise<array>} Returns an object containing the IDs of the dependent triggers.
*/
TriggerDependencies.prototype.add = function (params) {
	return this.req.jsonrpc('trigger.adddependencies', params)
		.then(data => data.result)
}


/**
* This method allows to delete all trigger dependencies from the given triggers. 
*
* @param {Object<array>} params - Triggers to delete the trigger dependencies from. 
* @returns {Promise<array>} Returns an object containing the IDs of the affected triggers.
*/
TriggerDependencies.prototype.delete = function (params) {
	return this.req.jsonrpc('trigger.deletedependencies', params)
		.then(data => data.result)
}


module.exports = TriggerDependencies
