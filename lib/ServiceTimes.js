/**
* @constructs ServiceTimes
*/
const ServiceTimes = function (req) {
	this.req = req
}


/**
**
* This method allows to create new service times.
*
* @param {Object<array>} params - The method accepts service times with the standard service time properties.  
* @returns {Promise<array>} Returns an object containing the IDs of the affected services.
*/
ServiceTimes.prototype.add = function (params) {
	return this.req.jsonrpc('service.addtimes', params)
		.then(data => data.result)
}


/**
* This method allows to delete all service times from services.
*
* @param {Object<array>} params - IDs of the services to delete all service times from.  
* @returns {Promise<array>} Returns an object containing the IDs of the affected services.
*/
ServiceTimes.prototype.delete = function (params) {
	return this.req.jsonrpc('service.deletetimes', params)
		.then(data => data.result)
}


module.exports = ServiceTimes
