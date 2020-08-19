/**
* @constructs Script
*/
const Script = function (req) {
	this.req = req
}


/**
* The method allows to retrieve scripts according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all scripts generated.
*/
Script.prototype.get = function (params = []) {
	return this.req.jsonrpc('script.get', params)
		.then(data => data.result)
}


/**
* This method allows to retrieve scripts available on the given hosts. 
*
* @param {Object} params - IDs of hosts to return scripts for.
* @returns {Promise<array>} Returns an object with host IDs as properties and arrays of available scripts as values. 
*/
Script.prototype.getscriptsbyhosts = function (params = []) {
	return this.req.jsonrpc('script.getscriptsbyhosts', params)
		.then(data => data.result)
}


/**
* This method allows to retrieve scripts available on the given hosts. 
*
* @param {Object} params - IDs of hosts to return scripts for.
* @returns {Promise<array>} Returns an object with host IDs as properties and arrays of available scripts as values. 
*/
Script.prototype.getbyhosts = function (params = []) {
	return this.req.jsonrpc('script.getscriptsbyhosts', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new script.  
*
* @param {Object<array>} params - Scripts to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created scripts.
*/
Script.prototype.create = function (params) {
	return this.req.jsonrpc('script.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete scripts.
*
* @param {Object<array>} params - IDs of the scripts to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted scripts.
*/
Script.prototype.delete = function (params) {
	return this.req.jsonrpc('script.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing script. 
*
* @param {Object<array>} params - Script properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated scripts.
*/
Script.prototype.update = function (params) {
	return this.req.jsonrpc('script.update', params)
		.then(data => data.result)
}


/**
* This method allows to run a script on a host.
*
* @param {Object} params - Parameters containing the ID of the script to run and the ID of the host.  
* @returns {Promise<array>} Returns the result of script execution.
*/
Script.prototype.execute = function (params = []) {
	return this.req.jsonrpc('script.execute', params)
		.then(data => data.result)
}


module.exports = Script
