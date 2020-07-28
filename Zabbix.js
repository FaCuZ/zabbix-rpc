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
const Application = require('./lib/Application')
const Host = require('./lib/Host')
const Item = require('./lib/Item')
const Dashboard = require('./lib/Dashboard')
const Configuration = require('./lib/Configuration')
const Trend = require('./lib/Trend')
const Screen = require('./lib/Screen')
const Graph = require('./lib/Graph')
const Httptest = require('./lib/Httptest') //web scenario
const Script = require('./lib/Script')
const Event = require('./lib/Event')
const Template = require('./lib/Template')
const Service = require('./lib/Service')

/**
 * @constructs Zabbix
 *
 * @param {string} [host] - Set the host of Zabbix server.
 * @param {string} [user] - Set the username.
 * @param {string} [pass] - Set the password.
 */
const Zabbix = function (host, user, pass) {
	this.req = new Request(host || "localhost")
	this.apiversion = ['4','1','0'] 

	// TODO: Auto login here?
	
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
	this.application = new Application(this.req)
	this.host = new Host(this.req)
	this.item = new Item(this.req)
	this.dashboard = new Dashboard(this.req)
	this.configuration = new Configuration(this.req)
	this.trend = new Trend(this.req)
	this.screen = new Screen(this.req)
	this.graph = new Graph(this.req)
	this.httptest = new Httptest(this.req)
	this.script = new Script(this.req)
	this.event = new Event(this.req)
	this.template = new Template(this.req)
	this.service = new Service(this.req)

}

/**
 * This method allows to retrieve the version of the Zabbix API.
 * 
 * @returns {Promise.<string>} Retrieve the version of the Zabbix API. 
 */
Zabbix.prototype.version = function () {	
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
Zabbix.prototype.call = function (jsonrpc) {	
	return this.req.fetch(jsonrpc)
		.then((data) => data.result)
}


module.exports = Zabbix
