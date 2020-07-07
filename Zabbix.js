const User = require('./lib/User')
const req = require('./request')

const Zabbix = function (host, user, pass) {
	this.host = host || "localhost"
	this.username = user || "guest"
	this.pass = pass || ""
	this.user = new User(this.host, this.username, this.pass)
	this.req_id = 0
};

Zabbix.prototype.version = function (){	
	return req.fetch(this.host, req.jsonrpc("apiinfo.version"))
		.then((data) => {
			console.log(data.result)
		})
}


Zabbix.prototype.call = function (){	
	return req.fetch(this.host, req.jsonrpc("apiinfo.version"))
		.then((data) => {
			console.log(data.result)
		})
}


module.exports = Zabbix
