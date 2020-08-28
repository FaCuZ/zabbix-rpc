const axios = require('axios')
const Zabbix = require('../lib/Zabbix')
const {
	login_mock,
	call_mock,
	not_json_mock,
	has_error_mock,
	catch_error_mock
	} = require('./mocks')

jest.mock('axios');

test("Create intance, login and return sessionid", () => {
	axios.post.mockResolvedValue(login_mock)

	const z = new Zabbix('localhost/zabbix', 'user', 'password')

	return z.user.login().then(data => expect(data.sessionid).toEqual("1234bd59b807674191e7d77572075f33"))
})

test("Make a simple call", () => {
	axios.post.mockResolvedValue(call_mock)

	const z = new Zabbix('localhost/zabbix')

	const rpc = {
		"jsonrpc": "2.0",
		"method": "apiinfo.version",
		"params": [],
		"id": 123456,
		"auth": null
	  }

	return z.call(rpc).then(data => expect(data.result).toEqual("4.0.0"))
})

test("Make a shortcut call", () => {
	axios.post.mockResolvedValue(call_mock)

	const z = new Zabbix('localhost/zabbix')

	return z.call("apiinfo.version", []).then(data => expect(data.result).toEqual("4.0.0"))
})


test("Check if the response is not a JSON", () => {
	axios.post.mockResolvedValue(not_json_mock)

	const z = new Zabbix('localhost/zabbix')

	return z.host.get().then(data => expect(data.error).toBeDefined())
})


test("Check if the response has a error", () => {
	axios.post.mockResolvedValue(has_error_mock)

	const z = new Zabbix('localhost/zabbix')

	return z.host.get().then(data => expect(data.error).toBeDefined())
})

test("Check if catch error on intent to fetch data", () => {
	axios.post.mockResolvedValue(catch_error_mock)

	const z = new Zabbix('badserver.com')

	//return	expect(() => { drinkFlavor('octopus'); }).toThrow();

	//return z.host.get().then(data => expect().toThrow())
	return z.host.get().then(data => expect(data.error).toBeDefined())
})
