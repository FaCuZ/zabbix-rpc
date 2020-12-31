/**
* @constructs Discovered
*/
const Discovered = function (req) {
	this.req = req
	
	this.service = new Service(req)
	this.host = new Host(req)
}


/**
* @constructs Service
*/
const Service = function(req) {
	this.req = req
}


/**
* The method allows to retrieve discovered services according to the given parameters. 
*
* @param {Object<array>} params - Parameters defining the desired output.
* @returns {Promise<array>} Retrieve services discovered on a host.
*/
Service.prototype.get = function (params) {
	return this.req.jsonrpc('dservice.get', params)
		.then(data => data.result)
}



/**
* @constructs Host
*/
const Host = function(req) {
	this.req = req
}


/**
* The method allows to retrieve discovered hosts according to the given parameters. 
*
* @param {Object<array>} params - Parameters defining the desired output.
* @returns {Promise<array>} Retrieve hosts discovered on a host.
*/
Host.prototype.get = function (params) {
	return this.req.jsonrpc('dhost.get', params)
		.then(data => data.result)
}



module.exports = Discovered
