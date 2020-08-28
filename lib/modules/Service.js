const ServiceDependencies = require('./ServiceDependencies')
const ServiceTimes = require('./ServiceTimes')

/**
* @constructs Service
*/
const Service = function (req) {
	this.req = req
	
	this.dependencies = new ServiceDependencies(this.req)
	this.times = new ServiceTimes(this.req)
}


/**
* The method allows to retrieve services according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all services generated.
*/
Service.prototype.get = function (params = []) {
	return this.req.jsonrpc('service.get', params)
		.then(data => data.result)
}


/**
* This method allows to calculate availability information about services.  
*
* @param {Object} params - Parameters containing the IDs of the services and time intervals to calculate SLA.
* @returns {Promise<array>} Returns the availability information about each service.
*/
Service.prototype.getsla = function (params = []) {
	return this.req.jsonrpc('service.getsla', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new service.  
*
* @param {Object<array>} params - Services to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created services.
*/
Service.prototype.create = function (params) {
	return this.req.jsonrpc('service.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete services.
*
* @param {Object<array>} params - IDs of the services to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted services.
*/
Service.prototype.delete = function (params) {
	return this.req.jsonrpc('service.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing service. 
*
* @param {Object<array>} params - Service properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated services.
*/
Service.prototype.update = function (params) {
	return this.req.jsonrpc('service.update', params)
		.then(data => data.result)
}


module.exports = Service
