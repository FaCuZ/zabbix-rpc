const axios = require('axios')

const Request = function (host) {
	this.host = host || "localhost"
	this.req_id = 0
	this.auth = null
}

Request.prototype.jsonrpc = function (method, params = [], needAuth = true){
	let auth = needAuth ? this.auth : null
	return this.fetch({
		"jsonrpc": "2.0",
		"method": method,
		"params": params,
		"id": this.req_id++,
		"auth": auth
	})
}


Request.prototype.fetch = function (jsonrpc){	
	return axios.post('http://' + this.host + '/api_jsonrpc.php', jsonrpc)
		.then(function (response) {
			if(response.data.error) {
				let jsonError = { error: response.data.error }
				jsonError.error.on_rpc = jsonrpc
				return { result: jsonError }
				//return { result: { error: response.data.error, on: jsonrpc }}
			}
			return response.data
		})
		.catch(function (error) {
			return { 
				result: { 
					error: { 
							code: (error.response) ? -1 : error.code, 
							message: (error.response) ? 'Invalid Zabbix Host' + error.response.status : 'Connection error: ' + error.syscall, 
							data: (error.response) ? error.response.statusText : error.config.url,
							on_rpc: jsonrpc
						}
					}
				}
		})

}


module.exports = Request
