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
			//console.log(response.data);
			if(response.data.error) {
				console.log('\nError:')
				console.log(response.data.error)
				console.log('On:')
				console.log(jsonrpc)
				return []
			}
			return response.data
		})
		.catch(function (error) {
			console.log(error)
			return error
		})
}


module.exports = Request
