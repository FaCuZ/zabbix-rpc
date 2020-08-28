const base_mock = {
	status: 200,
	statusText: 'OK',
	headers: {
	  date: 'Mon, 24 Aug 2020 16:21:40 GMT',
	  server: 'Apache/2.4.6 (CentOS) OpenSSL/1.0.2k-fips mod_fcgid/2.3.9 PHP/5.4.16 mod_wsgi/3.4 Python/2.7.5',
	  'x-powered-by': 'PHP/5.4.16',
	  'access-control-allow-headers': 'Content-Type',
	  'access-control-allow-methods': 'POST',
	  'content-length': '400',
	  connection: 'close',
	  'content-type': 'application/json'
	},
	config: {
	  url: 'http://localhost/zabbix/api_jsonrpc.php',
	  method: 'post',
	  data: '{"jsonrpc":"2.0","method":"user.checkAuthentication","params":{"sessionid":"ad5458523e0a7999a4efc3352d12ae43"},"id":2,"auth":null}',
	  headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'User-Agent': 'axios/0.20.0',
		'Content-Length': 130
	  },
	  timeout: 0,
	  maxContentLength: -1,
	  maxBodyLength: -1,
	},
	  socketPath: undefined,
	  method: 'POST',
	  insecureHTTPParser: undefined,
	  path: '/zabbix/api_jsonrpc.php',
	  aborted: false,
	  timeoutCb: null,
	  upgradeOrConnect: false,
	  parser: null,
	  maxHeadersCount: null,
	  reusedSocket: false,
	data: {
	  jsonrpc: '2.0',
	  result: {
		userid: '3',
		alias: 'GOSIT',
		name: 'GOSIT',
		surname: '',
		url: '',
		autologin: '0',
		autologout: '0',
		lang: 'en_GB',
		refresh: '30s',
		type: '1',
		theme: 'default',
		attempt_failed: '0',
		attempt_ip: '192.168.0.2',
		attempt_clock: '1592495408',
		rows_per_page: '50',
		sessionid: '1234bd59b807674191e7d77572075f33',
		debug_mode: 0,
		userip: '192.168.0.2',
		gui_access: 0
	  },
	  id: 2
	}
}

const login_mock = Object.assign({}, base_mock)

login_mock.data = {
	jsonrpc: '2.0',
	result: {
		sessionid: "1234bd59b807674191e7d77572075f33"
	}
}

 const call_mock = Object.assign({}, base_mock)

 call_mock.data = {
	jsonrpc: '2.0',
	result: {
		"jsonrpc": "2.0",
		"result": "4.0.0",
		"id": 1
	}
}

const not_json_mock =  Object.assign({}, base_mock)
not_json_mock.headers =  Object.assign({}, not_json_mock.headers)
not_json_mock.headers['content-type'] = 'text/html; charset=utf-8'


const has_error_mock =  Object.assign({}, base_mock)
has_error_mock.data = {
	error: {
	  code: 404,
	  message: 'Invalid Zabbix Host.',
	  data: 'Not Found',
	  on_rpc: {
		jsonrpc: '2.0',
		method: 'user.checkAuthentication',
		params: [],
		id: 2,
		auth: null
	  },
	  url: 'http://localhost/api_jsonrpc.php'
	}
  }

const catch_error_mock = { // FIX: Does not catch
		errno: 'ENOTFOUND',
		code: 'ENOTFOUND',
		syscall: 'getaddrinfo',
		hostname: 'bleble',
		config: {
			url: 'http://badserver.com/api_jsonrpc.php',
			method: 'post',
			data: '{"jsonrpc":"2.0","method":"apiinfo.version","params":[],"id":0,"auth":null}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'User-Agent': 'axios/0.20.0',
				'Content-Length': 75
			},
			timeout: 0,
			maxContentLength: -1,
			maxBodyLength: -1,
		},
		response: undefined,
		isAxiosError: true,
	}


module.exports = {
	login_mock: login_mock,
	base_mock: base_mock,
	call_mock: call_mock,
	not_json_mock: not_json_mock,
	has_error_mock: has_error_mock,
	catch_error_mock: catch_error_mock,
}
