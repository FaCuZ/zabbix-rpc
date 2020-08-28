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
			"auth": auth // TODO needAuth ? this.auth : null
		})
}


Request.prototype.fetch = function (jsonrpc){
	let header = {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}

	let url = 'http://' + this.host + '/api_jsonrpc.php'

	return axios.post(url, jsonrpc, { headers: header })
	.then(function (res) {
			// Error if the response is not JSON.
			if(!res.headers['content-type'].includes('application/json')){
				return error(-1, 'Invalid content type response.', 'Content type: ' + res.headers['content-type'], jsonrpc, url)
			}

			// Error if it comes from zabbix.
			if(res.data.error) {
				return error(res.data.error.code, res.data.error.message, res.data.error.data, jsonrpc, url)
			}

			return res.data
		})
		.catch(function (err) {
			// Error if a unknown error
			if(!err.code && !err.response) return error(-1, 'Unknown error', 'Unknown error on fetch data', '', '')

			// Error if zabbix is not recognizable and others errors.
			return error(
				(err.response) ? err.response.status || -1 : err.code,
				(err.response) ? 'Invalid Zabbix Host.' : 'Connection error: ' + err.syscall,
				(err.response) ? err.response.statusText : err.config.url,
				jsonrpc, url
			)
		})

}


module.exports = Request


function error(code, message, data, jsonrpc, url){
	return {
		result: {
			error: {
				code: code,
				message: message,
				data: data,
				on_rpc: jsonrpc,
				url: url,
			}
		}
	}
}
