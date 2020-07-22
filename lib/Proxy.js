/**
* @constructs Proxy
*/
const Proxy = function (req) {
	this.req = req
}


/**
* The method allows to retrieve proxies according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all proxies generated.
*/
Proxy.prototype.get = function (params = []) {
	return this.req.jsonrpc('proxy.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new proxy.  
*
* @param {Object<array>} params - Proxies to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created proxies.
*/
Proxy.prototype.create = function (params) {
	return this.req.jsonrpc('proxy.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete proxies.
*
* @param {Object<array>} params - IDs of the proxies to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted proxies.
*/
Proxy.prototype.delete = function (params) {
	return this.req.jsonrpc('proxy.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing proxy. 
*
* @param {Object<array>} params - Proxy properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated proxies.
*/
Proxy.prototype.update = function (params) {
	return this.req.jsonrpc('proxy.update', params)
		.then(data => data.result)
}


module.exports = Proxy