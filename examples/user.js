const Zabbix = require('zabbix-rpc')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const show = data => console.log(data)

async function test() {
	const z = new Zabbix('localhost/zabbix')

	await z.user.login('user', 'pass')
	
	console.log("Auth hash:", z.req.auth)

	z.user.logout()

	await z.user.login('user2', 'pass')
	 	
	z.user.check(z.req.auth).then(show)
	
	z.user.get({"output": "extend"}).then(show)	

	z.user.group.get()

	z.user.macro.update([], true) // Global macro
}

test()