const Request = require('./Request')
const User = require('./lib/User')
const Alert = require('./lib/Alert')
const Problem = require('./lib/Problem')

/**
 * @constructs Zabbix
 *
 * @param {string} [host] - Set the host of Zabbix server.
 * @param {string} [user] - Set the user name.
 * @param {string} [pass] - Set the password.
 */
const Zabbix = function (host, user, pass) {
	this.host = host || "localhost"
	this.req = new Request(this.host)
	
	this.user = new User(this.req, user, pass)
	this.alert = new Alert(this.req)
	this.problem = new Problem(this.req)
};

/**
 * This method allows to retrieve the version of the Zabbix API.
 * 
 * @returns {Promise.<string>} Retrieve the version of the Zabbix API. 
 */
Zabbix.prototype.version = async function (){	
	return this.req.jsonrpc("apiinfo.version", [], false)
		.then((data) => {
			this.version = data.result
			return data.result
		})
}


/**
 *	Execute a basic jsonrpc command.
 *
 * @param {Object} jsonrpc - JSON RPC that performs one specific task.
 * @returns {Promise.<string>} A promise to a result.
 */
Zabbix.prototype.call = function (jsonrpc){	
	return this.req.fetch(jsonrpc).then((data) => data.result)
}


module.exports = Zabbix
