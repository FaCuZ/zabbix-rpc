const axios = require('axios')
const Zabbix = require('../../lib/Zabbix')
const { base_mock } = require('../mocks')

jest.mock('axios')

// This will be test: User | .check() | .login() | .logout() | .create() | .delete() | .get() | .update()

describe('Check if User work correctly', () => {
	const user_mock = Object.assign({}, base_mock)

	user_mock.data = {
		"jsonrpc": "2.0",
		"result": {
			"userid": "1",
			"alias": "Admin",
			"name": "Zabbix",
			"surname": "Administrator",
			"autologin": "1",
			"userip": "127.0.0.1",
			"sessionid": "5b56ee",
		},
		"id": 1
	}

	test("User .login(), .logout() and check()", async () => {
		axios.post.mockResolvedValue(user_mock)

		const z = new Zabbix('localhost/zabbix')

		let test = await z.user.login('user', 'password')
		expect(test.sessionid).toEqual("5b56ee")

		test = await z.user.check()
		expect(test.sessionid).toEqual("5b56ee")

		test = await z.user.check("5b56ee")
		expect(test.sessionid).toEqual("5b56ee")

		test = await z.user.logout()
		expect(test.sessionid).toEqual("5b56ee")

	})


	const user2_mock = Object.assign({}, base_mock)

	user2_mock.data ={
		"jsonrpc": "2.0",
		"result": {
			"userids": ["1"]
		},
		"id": 1
	}

	test("User .create() .delete() .get() .update()", async () => {
		axios.post.mockResolvedValue(user2_mock)

		const z = new Zabbix('localhost/zabbix')

		let test = await z.user.create()
		expect(test.userids).toEqual(["1"])

		test = await z.user.delete()
		expect(test.userids).toEqual(["1"])

		test = await z.user.get()
		expect(test.userids).toEqual(["1"])

		test = await z.user.update()
		expect(test.userids).toEqual(["1"])

	})

})

// This will be test: user.macro | .create() | .delete() | .get() | .update()

describe('Check if User Macro work correctly', () => {
	const usermacro_mock = Object.assign({}, base_mock)

	usermacro_mock.data = {
		"jsonrpc": "2.0",
		"result": {
			"hostmacroids": ["1"]
		},
		"id": 1
	}

	test("User.macro .create() .delete() .get() .update()", async () => {
		axios.post.mockResolvedValue(usermacro_mock)

		const z = new Zabbix('localhost/zabbix')

		let test = await z.user.macro.create()
		expect(test.hostmacroids).toEqual(["1"])

		test = await z.user.macro.delete()
		expect(test.hostmacroids).toEqual(["1"])

		test = await z.user.macro.get()
		expect(test.hostmacroids).toEqual(["1"])

		test = await z.user.macro.update()
		expect(test.hostmacroids).toEqual(["1"])
	})

})

// This will be test: user.group | .create() | .delete() | .get() | .update()

describe('Check if User Group work correctly', () => {
	const usergroup_mock = Object.assign({}, base_mock)

	usergroup_mock.data = {
		"jsonrpc": "2.0",
		"result": {
			"usrgrpids": ["17"]
		},
		"id": 1
	}

	test("User.group .create() .delete() .get() .update()", async () => {
		axios.post.mockResolvedValue(usergroup_mock)

		const z = new Zabbix('localhost/zabbix')

		let test = await z.user.group.create()
		expect(test.usrgrpids).toEqual(["17"])

		test = await z.user.group.delete()
		expect(test.usrgrpids).toEqual(["17"])

		test = await z.user.group.get()
		expect(test.usrgrpids).toEqual(["17"])

		test = await z.user.group.update()
		expect(test.usrgrpids).toEqual(["17"])
	})

})


