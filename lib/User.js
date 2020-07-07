const req = require('../request')

const User = function (host, user, pass) {
	this.host = host
	this.username = user 
	this.pass = pass
};


User.prototype.login = function (){	
	let opts = {
		"jsonrpc": "2.0",
		"method": "user.login",
		"params": {
			"user": this.username,
			"password": this.pass
		},
		"id": req.generate_id(),
		"auth": null
	}

	return req.fetch(this.host, opts).then((data) => {
		this.auth = data.result
		console.log(data.result)
	})
}




module.exports = User