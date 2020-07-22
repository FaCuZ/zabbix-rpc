const Request = require('../Request')

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
 * @returns {Promise<void>} A promise to login.
 */
User.prototype.login = (user, pass) => { 	
	// TODO: Treat data if userdata is true

	let params = {
		"user": user || this.username,
		"password": pass || this.pass,
		//"userdata": true
	}
	
	return this.req.jsonrpc("user.login", params)
		.then(data => {
			//if(userdata)
			this.req.auth = data.result
			this.auth = data.result
		})
}


/**
 * This method allows to log out of the API and invalidates the current authentication token. 
 * 
 * @returns {Promise<boolean>} Returns true if the user has been logged out successfully. 
 */
User.prototype.logout = (user, pass) => {	
	return this.req.jsonrpc("user.logout")
		.then(data => {
			if(data.result){
				this.req.auth = null
				this.auth = null
			}
			return data.result
		})
}


/**
 * The method allows to retrieve users according to the given parameters. 
 *   
 * @param {Object} params - Parameters defining the desired output. 
 * @returns {Promise<array>} Retrieve all of the configured users.
 */
User.prototype.get = (params = []) => {
	return this.req.jsonrpc("user.get", params)
		.then(data => data.result)
}


/**
 * This method checks and prolongs user session.
 *   
 * @param {string} sessionid - User session id.
 * @returns {Promise<string>} Returns an object containing information about user.
 */
User.prototype.check = (sessionid) => {
	// TODO: Check if sessionid is a object or a string
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
User.prototype.create = (params) => {
	return this.req.jsonrpc('user.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete users.
*
* @param {Object<array>} params - IDs of the users to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted users.
*/
User.prototype.delete = (params) => {
	return this.req.jsonrpc('user.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing user. 
*
* @param {Object<array>} params - User properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated users.
*/
User.prototype.update = (params) => {
	return this.req.jsonrpc('user.update', params)
		.then(data => data.result)
}


module.exports = User