const axios = require('axios')
const Zabbix = require('../../lib/Zabbix')
const { base_mock } = require('../mocks')

jest.mock('axios')


// This will be test: host | .create() | .delete() | .get() | .update()
// This will be test: host.mass | .add() | .remove() | .update()

describe('Check if Host work correctly', () => {
	const host_mock = Object.assign({}, base_mock)

	host_mock.data = {
		"jsonrpc": "2.0",
		"result": {
			"hostids": ["101"]

		},
		"id": 1
	}

	test("User .create() .delete() .get() .update()", async () => {
		axios.post.mockResolvedValue(host_mock)

		const z = new Zabbix('localhost/zabbix')

		let test = await z.host.create()
		expect(test.hostids).toEqual(["101"])

		test = await z.host.delete()
		expect(test.hostids).toEqual(["101"])

		test = await z.host.get()
		expect(test.hostids).toEqual(["101"])

		test = await z.host.update()
		expect(test.hostids).toEqual(["101"])
	})

})

// This will be test: host.group | .create() | .delete() | .get() | .update()
// This will be test: host.group.mass | .add() | .remove() | .update()

describe('Check if Host Group work correctly', () => {
	const hostgroup_mock = Object.assign({}, base_mock)

	hostgroup_mock.data = {
		"jsonrpc": "2.0",
		"result": {
			"groupids": ["107"]
		},
		"id": 1
	}

	test("Host.group .create() .delete() .get() .update()", async () => {
		axios.post.mockResolvedValue(hostgroup_mock)

		const z = new Zabbix('localhost/zabbix')

		let test = await z.host.group.create()
		expect(test.groupids).toEqual(["107"])

		test = await z.host.group.delete()
		expect(test.groupids).toEqual(["107"])

		test = await z.host.group.get()
		expect(test.groupids).toEqual(["107"])

		test = await z.host.group.update()
		expect(test.groupids).toEqual(["107"])
	})

})

// This will be test: host.interface | .create() | .delete() | .get() | .update() | .replace()
// This will be test: host.interface.mass | .add() | .remove()

describe('Check if Host Interface work correctly', () => {
	const hostgroup_mock = Object.assign({}, base_mock)

	hostgroup_mock.data = {
		"jsonrpc": "2.0",
		"result": {
			"interfaceids": ["30062"]
		},
		"id": 1
	}

	test("Host.interface .create() .delete() .get() .update()", async () => {
		axios.post.mockResolvedValue(hostgroup_mock)

		const z = new Zabbix('localhost/zabbix')

		let test = await z.host.interface.create()
		expect(test.interfaceids).toEqual(["30062"])

		test = await z.host.interface.delete()
		expect(test.interfaceids).toEqual(["30062"])

		test = await z.host.interface.get()
		expect(test.interfaceids).toEqual(["30062"])

		test = await z.host.interface.update()
		expect(test.interfaceids).toEqual(["30062"])
	})

})

// This will be test: host.prototype | .create() | .delete() | .get() | .update()

describe('Check if Host Prototype work correctly', () => {
	const hostgroup_mock = Object.assign({}, base_mock)

	hostgroup_mock.data = {
		"jsonrpc": "2.0",
		"result": {
			"hostids": ["10103"]
		},
		"id": 1
	}

	test("Host.prototype .create() .delete() .get() .update()", async () => {
		axios.post.mockResolvedValue(hostgroup_mock)

		const z = new Zabbix('localhost/zabbix')

		let test = await z.host.prototype.create()
		expect(test.hostids).toEqual(["10103"])

		test = await z.host.prototype.delete()
		expect(test.hostids).toEqual(["10103"])

		test = await z.host.prototype.get()
		expect(test.hostids).toEqual(["10103"])

		test = await z.host.prototype.update()
		expect(test.hostids).toEqual(["10103"])
	})

})
