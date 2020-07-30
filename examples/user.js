const Zabbix = require('../Zabbix.js')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const show = data => console.log(data)

async function test() {
	const z = new Zabbix('localhost/zabbix')

	z.user.login('user', 'pass')
	
	await sleep(1000)

	console.log("Auth hash:", z.req.auth)

	z.user.logout()

	await sleep(1000)

	z.user.login('user2', 'pass')
	 	
	await sleep(1000)

	z.user.check(z.req.auth).then(show)
	
	z.user.get({"output": "extend"}).then(show)	

	z.user.group.get()

	z.user.macro.update([], true) // Global macro

}

test()