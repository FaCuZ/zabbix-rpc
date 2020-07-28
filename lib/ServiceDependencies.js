/**
* @constructs ServiceDependencies
*/
const ServiceDependencies = function (req) {
	this.req = req
}


/**
**
* This method allows to create new service dependencies. 
*
* @param {Object<array>} params - Service dependencies to create.  
* @returns {Promise<array>} Returns an object containing the IDs of the dependent services.
*/
ServiceDependencies.prototype.add = function (params) {
	return this.req.jsonrpc('service.adddependencies', params)
		.then(data => data.result)
}


/**
* This method allows to delete all service dependencies from the given services. 
*
* @param {Object<array>} params - Services to delete the service dependencies from. 
* @returns {Promise<array>} Returns an object containing the IDs of the affected services.
*/
ServiceDependencies.prototype.delete = function (params) {
	return this.req.jsonrpc('service.deletedependencies', params)
		.then(data => data.result)
}


module.exports = ServiceDependencies
