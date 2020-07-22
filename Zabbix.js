const Request = require('./Request')

const User = require('./lib/User')
const Alert = require('./lib/Alert')
const Problem = require('./lib/Problem')
const Action = require('./lib/Action')
const Map = require('./lib/Map')
const Correlation = require('./lib/Correlation')
const Image = require('./lib/Image')
const Proxy = require('./lib/Proxy')
const Trigger = require('./lib/Trigger')
const Maintenance = require('./lib/Maintenance')

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
	this.action = new Action(this.req)
	this.alert = new Alert(this.req)
	this.correlation = new Correlation(this.req)
	this.problem = new Problem(this.req)
	this.map = new Map(this.req)
	this.image = new Image(this.req)	
	this.proxy = new Proxy(this.req)
	this.trigger = new Trigger(this.req)
	this.maintenance = new Maintenance(this.req)
}

/**
 * This method allows to retrieve the version of the Zabbix API.
 * 
 * @returns {Promise.<string>} Retrieve the version of the Zabbix API. 
 */
Zabbix.prototype.version = () => {	
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
Zabbix.prototype.call = (jsonrpc) => {	
	return this.req.fetch(jsonrpc)
		.then((data) => data.result)
}


module.exports = Zabbix
