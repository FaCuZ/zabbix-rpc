const axios = require('axios')
const Zabbix = require('../Zabbix')
const { login_mock, call_mock } = require('./mocks')

jest.mock('axios');

test("Create intance, login and return sessionid", () => {
	axios.post.mockResolvedValue(login_mock)

	const z = new Zabbix('localhost/zabbix')

	return z.user.login('user', 'password').then(data =>
		expect(data.sessionid).toEqual("1234bd59b807674191e7d77572075f33"))
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
