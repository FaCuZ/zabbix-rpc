const HostGroup = require('./HostGroup')
const HostInterface = require('./HostInterface')
const HostPrototype = require('./HostPrototype')

/**
* @constructs Host
*/
const Host = function (req) {
	this.req = req	
	this.mass = new Mass()
	
	this.group = new HostGroup(this.req)
	this.interface = new HostInterface(this.req)
	this.prototype = new HostPrototype(this.req)
}


/**
* The method allows to retrieve hosts according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all hosts generated.
*/
Host.prototype.get = function (params = []) {
	return this.req.jsonrpc('host.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new host.  
*
* @param {Object<array>} params - Hosts to create. 
* @param {Object} ble - ble to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created hosts.
*/
Host.prototype.create = function (params, ble =true) {
	return this.req.jsonrpc('host.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete hosts.
*
* @param {Object<array>} params - IDs of the hosts to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted hosts.
*/
Host.prototype.delete = function (params) {
	return this.req.jsonrpc('host.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing host. 
*
* @param {Object<array>} params - Host properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated hosts.
*/
Host.prototype.update = function (params) {
	return this.req.jsonrpc('host.update', params)
		.then(data => data.result)
}


/**
* @constructs Mass
*/
const Mass = function() {}


/**
* This method allows to simultaneously add multiple related objects to all the given hosts.
*
* @param {Object<array>} params - Parameters containing the IDs of the hosts to update and the objects to add to all the hosts. 
* @returns {Promise<array>} Returns an object containing the IDs of the updated hosts.
*/
Mass.prototype.add = function (params) {
	return this.req.jsonrpc('host.massadd', params)
		.then(data => data.result)
}


/**
* This method allows to remove related objects from multiple hosts. 
*
* @param {Object<array>} params - This method allows to remove related objects from multiple hosts.
* @returns {Promise<array>} Returns an object containing the IDs of the updated hosts.
*/
Mass.prototype.remove = function (params) {
	return this.req.jsonrpc('host.massremove', params)
		.then(data => data.result)
}


/**
* This method allows to simultaneously replace or remove related objects and update properties on multiple hosts.  
*
* @param {Object<array>} params - Parameters containing the IDs of the hosts to update and the properties that should be updated. 
* @returns {Promise<array>} Returns an object containing the IDs of the updated hosts.
*/
Mass.prototype.update = function (params) {
	return this.req.jsonrpc('host.massupdate', params)
		.then(data => data.result)
}


module.exports = Host
