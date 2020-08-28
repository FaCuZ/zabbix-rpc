const UserGroup = require('./UserGroup')
const UserMacro = require('./UserMacro')

/**
 * @constructs User
 * 
 * @param {string} [user] - User name. 'guest' by default.
 * @param {string} [pass] - User password. Unused for HTTP authentication.  
 */
const User = function (req, user, pass) {
	this.username = user || "guest"
	this.pass = pass || ""	
	this.req = req
	this.auth = null 

	this.group = new UserGroup(this.req)
	this.macro = new UserMacro(this.req)
}


/**
 * This method allows to log in to the API and generate an authentication token. 
 * 
 * @param {string} [user] - User name. 'guest' by default.
 * @param {string} [pass] - User password. Unused for HTTP authentication.  
 * @param {boolean} [userData=false] - Return information about the authenticated user.  
 * @returns {Promise<void>} A promise to login.
 */
User.prototype.login = function (user, pass, userData = false) { 	
	// TODO: let sessionid = (typeof params === 'object') ? params.sessionid : params
	if(this.auth) this.auth = this.req.auth = null

	let params = {
		"user": user || this.username,
		"password": pass || this.pass,
		"userData": userData
	}
		
	return this.req.jsonrpc("user.login", params).then(res => {
			if(res.error || res.result.error) return res.result

			this.auth = this.req.auth = (res.result.sessionid) ? res.result.sessionid : res.result  
						
			return res.result
		})
		.catch(function (error) {
			return error
		}) 
}


/**
 * This method allows to log out of the API and invalidates the current authentication token. 
 * 
 * @returns {Promise<boolean>} Returns true if the user has been logged out successfully. 
 */
User.prototype.logout = function () {	
	return this.req.jsonrpc("user.logout", []).then(data => {
			if(data.result) this.auth = this.req.auth = null
			return data.result
		})
}


/**
 * The method allows to retrieve users according to the given parameters. 
 *   
 * @param {Object} params - Parameters defining the desired output. 
 * @returns {Promise<array>} Retrieve all of the configured users.
 */
User.prototype.get = function (params = []) {
	return this.req.jsonrpc("user.get", params)
		.then(data => data.result)
}


/**
 * This method checks and prolongs user session.
 *   
 * @param {string} sessionid - User session id.
 * @returns {Promise<string>} Returns an object containing information about user.
 */
User.prototype.check = function (params) {
	let sessionid = ''	

	if(params){
		sessionid = (typeof params === 'object') ? params.sessionid : params
	} else {
		sessionid = this.auth	
	}

	return this.req.jsonrpc("user.checkAuthentication", { "sessionid": sessionid }, false)
		.then(data => data.result)
}


/**
**
* This method allows to create new user.  
*
* @param {Object<array>} params - Users to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created users.
*/
User.prototype.create = function (params) {
	return this.req.jsonrpc('user.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete users.
*
* @param {Object<array>} params - IDs of the users to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted users.
*/
User.prototype.delete = function (params) {
	return this.req.jsonrpc('user.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing user. 
*
* @param {Object<array>} params - User properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated users.
*/
User.prototype.update = function (params) {
	return this.req.jsonrpc('user.update', params)
		.then(data => data.result)
}


module.exports = User
