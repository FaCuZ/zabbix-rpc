const axios = require('axios')

const self = {
	jsonrpc: (method, auth = null, params = []) => {
		return {
			"jsonrpc": "2.0",
			"method": method,
			"params": params,
			"id": self.generate_id(),
			"auth": auth
		}
	},
	generate_id:  () => {
		return Math.floor(Math.random() * (9999999 - 1000000)) + 1000000
	},
	fetch: (host, opts) => {
		return axios.post('http://' + host + '/zabbix/api_jsonrpc.php', opts)
			.then(function (response) {
				//console.log(response.data);
				return response.data
			})
			.catch(function (error) {
				console.log(error)
				return error
			});
	}

}

module.exports = self
