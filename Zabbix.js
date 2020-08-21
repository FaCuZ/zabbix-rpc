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
const History = require('./lib/History')
const Iconmap = require('./lib/Iconmap')
const Valuemap = require('./lib/Valuemap')
const Task = require('./lib/Task')
const Autoregistration = require('./lib/Autoregistration')
const Discovered = require('./lib/Discovered')
const Discovery = require('./lib/Discovery')
const Apiinfo = require('./lib/Apiinfo')

/**
 * @constructs Zabbix
 *
 * @param {string} [host] - Set the host of Zabbix server.
 * @param {string} [user] - Set the username.
 * @param {string} [pass] - Set the password.
 */
const Zabbix = function (host, user, pass) {
	this.req = new Request(host || "localhost")
	this.apiversion = ''

	// TODO Auto login here when autologin is true on (host, user, pass, autologin = false)
	// TODO Login, logout shortcut

	this.version()
	
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
	this.history = new History(this.req)
	this.iconmap = new Iconmap(this.req)
	this.valuemap = new Valuemap(this.req)
	this.task = new Task(this.req)
	this.autoregistration = new Autoregistration(this.req)
	this.discovered = new Discovered(this.req)
	this.discovery = new Discovery(this.req)
	this.apiinfo = new Apiinfo(this.req)

}

/**
 * This method allows to retrieve the version of the Zabbix API.
 * 
 * @returns {Promise.<string>} Retrieve the version of the Zabbix API. 
 */
Zabbix.prototype.version = function () {	
	return this.req.jsonrpc("apiinfo.version", [], false)
		.then((data) => {
			this.apiversion = data.result
			return data.result
		})
}


/**
 *	Execute a basic jsonrpc command.
 *
 * @param {Object} jsonrpc - JSON RPC that performs one specific task.
 * @param {Object} params - Parameters defining the desired output. 
 * @returns {Promise.<string>} A promise to a result.
 */
Zabbix.prototype.call = function (jsonrpc, params) { 
	if(params) {
		const array = ['apiinfo.version', 'user.login']

		return this.req.jsonrpc(jsonrpc, params, (array.indexOf(jsonrpc) > -1) ? false : true)
			.then((data) => data.result)
	}

	return this.req.fetch(jsonrpc)
		.then((data) => data.result)
}


module.exports = Zabbix
