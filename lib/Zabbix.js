const Request = require('./Request')

const User = require('./modules/User')
const Alert = require('./modules/Alert')
const Problem = require('./modules/Problem')
const Action = require('./modules/Action')
const Map = require('./modules/Map')
const Correlation = require('./modules/Correlation')
const Image = require('./modules/Image')
const Proxy = require('./modules/Proxy')
const Trigger = require('./modules/Trigger')
const Maintenance = require('./modules/Maintenance')
const Application = require('./modules/Application')
const Host = require('./modules/Host')
const Item = require('./modules/Item')
const Dashboard = require('./modules/Dashboard')
const Configuration = require('./modules/Configuration')
const Trend = require('./modules/Trend')
const Screen = require('./modules/Screen')
const Graph = require('./modules/Graph')
const Httptest = require('./modules/Httptest') //web scenario
const Script = require('./modules/Script')
const Event = require('./modules/Event')
const Template = require('./modules/Template')
const Service = require('./modules/Service')
const History = require('./modules/History')
const Iconmap = require('./modules/Iconmap')
const Valuemap = require('./modules/Valuemap')
const Task = require('./modules/Task')
const Autoregistration = require('./modules/Autoregistration')
const Discovered = require('./modules/Discovered')
const Discovery = require('./modules/Discovery')
const Apiinfo = require('./modules/Apiinfo')


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
