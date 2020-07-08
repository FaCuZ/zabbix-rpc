const Request = require('../Request')

const User = function (req, user, pass) {
	this.username = user || "guest"
	this.pass = pass || ""
	this.req = req
	this.auth = null
}

/**
 * This method allows to log in to the API and generate an authentication token. 
 * 
 * @todo Treat data if userdata is true
 *
 * @param {string} [user] - User name. 'guest' by default.
 * @param {string} [pass] User password. Unused for HTTP authentication.  
 * @returns {Promise<void>} A promise to login.
 */
User.prototype.login = function (user, pass){	
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
User.prototype.logout = function (user, pass){	
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
 * @param {array} params Parameters defining the desired output. 
 * @returns {Promise<array>} Retrieve all of the configured users.
 */
User.prototype.get = function (params = []){
	return this.req.jsonrpc("user.get", params)
		.then(data => data.result)
}

/**
 * This method checks and prolongs user session.
 *   
 * @param {string} sessionid - User session id.
 * @returns {Promise<string>} Returns an object containing information about user.
 */
User.prototype.check = function (sessionid){
	return this.req.jsonrpc("user.checkAuthentication", { "sessionid": sessionid }, false)
		.then(data => data.result)
}

module.exports = User