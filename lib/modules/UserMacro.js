/**
* @constructs UserMacro
*/
const UserMacro = function (req) {
	this.req = req
}


/**
* The method allows to retrieve host and global macross according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all host and global macross generated.
*/
UserMacro.prototype.get = function (params = []) {
	return this.req.jsonrpc('usermacro.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new host or global macros.  
*
* @param {Object<array>} params -  Host or global macro to create. 
* @param {Object<array>} isGlobal - Is it a global macro? 
* @returns {Promise<array>} Returns an object containing the IDs of the created host or global macross.
*/
UserMacro.prototype.create = function (params, isGlobal = false) {
	let global_str = (isGlobal) ? 'global' : ''
	return this.req.jsonrpc('usermacro.create' + global_str, params)
		.then(data => data.result)
}


/**
* This method allows to delete host or global macross.
*
* @param {Object<array>} params - IDs of the host or global macross to delete.
* @param {Object<array>} isGlobal - Is it a global macro? 
* @returns {Promise<array>} Returns an object containing the IDs of the deleted host or global macross.
*/
UserMacro.prototype.delete = function (params, isGlobal = false) {
	let global_str = (isGlobal) ? 'global' : ''
	return this.req.jsonrpc('usermacro.delete' + global_str, params)
		.then(data => data.result)
}


/**
* This method allows to update existing host or global macros. 
*
* @param {Object<array>} params - Host or global macro properties to be updated.
* @param {Object<array>} isGlobal - Is it a global macro? 
* @returns {Promise<array>} Returns an object containing the IDs of the updated host or global macross.
*/
UserMacro.prototype.update = function (params, isGlobal = false) {
	let global_str = (isGlobal) ? 'global' : ''
	return this.req.jsonrpc('usermacro.update' + global_str, params)
		.then(data => data.result)
}


module.exports = UserMacro