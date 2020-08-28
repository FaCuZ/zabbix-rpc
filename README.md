<h1 align="center">
  <img src="./docs/Zabbix_logo.png" alt="Zabbix RPC">
  <br>
  Zabbix RPC
  <br>
</h1>

<h4 align="center">A powerfull and easy to use Zabbix API integrator</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/zabbix-rpc">
    <img alt="npm" src="https://img.shields.io/npm/v/zabbix-rpc.svg">
  </a>

  <a href="https://www.npmjs.com/package/zabbix-rpc">
    <img alt="npm" src="https://img.shields.io/npm/dt/zabbix-rpc.svg">
  </a>

  <a href="https://inch-ci.org/github/FaCuZ/zabbix-rpc">
    <img alt="Zabbix-rpc documentation" src="https://inch-ci.org/github/facuz/zabbix-rpc.svg">
  </a>

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/facuz/zabbix-rpc.svg">

  <a href="#license">
    <img alt="Zabbix-rpc license" src="https://img.shields.io/github/license/FaCuZ/zabbix-rpc.svg">
  </a>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#basic-methods">Methods</a> •
  <a href="#Basic-parameters">Parameters</a> •
  <a href="#data-types">Data types</a> •
  <a href="#license">License</a>
</p>

## Features

This is a javascript package that allows you to programmatically retrieve and modify the configuration of Zabbix and provides access to historical and monitoring data.

It is widely used to:

- Create new applications to work with Zabbix.
- Integrate Zabbix with third party software.
- Automate routine tasks.
- Get monitoring data.

and provides you:

- Easy to use methods.
- Asynchronous calls.
- Multiple instances and users.
- IDE Friendly documentation.

## How to use

The package is designed to be as intuitive as possible.

#### Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/). It is done using the [`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) command:

```bash
$ npm install zabbix-rpc
```

Then you must import the package where you want to run it

```javascript
const Zabbix = require('zabbix-rpc')
```

#### Instances

You can create multiple instances to use different servers or the same server with different users. For example, to create an instance and log in

```javascript
const z = new Zabbix('example.com/zabbix')

z.user.login('username', 'password')
```

The session remains active until `logout()` is called or terminated by the zabbix server. It is recommended to always log out at the end to prevent the generation of a large number of open session records.

```javascript
z.user.logout()
```

You can check if the session is started by passing the authentication hash as a parameter or leaving it empty to take the previously defined

```javascript
z.user.check().then(console.log)
```

#### Basic methods

Once you have successfully logged in, you can make any type of query, as long as it is compatible with the server version.

Since each method makes a request to the server, they will **always return a promise**.


```javascript
let hosts = await z.host.get()

z.version().then(console.log)

let recentProblems = await z.problem.get({ "recent": true })
```

#### Params

As you can see you can pass the parameters allowed by Zabbix as arguments of the methods

```javascript
let groups = await z.host.group.get({
  output: ['groupid', 'name'],
  filter: {
    "name": ['group1', 'group2']
  },
})

let hosts = await z.host.get({
  groupids: [groups[0].groupid],
  output: ['hostid', 'name']
})

let hostids = hosts.map((host) => host.hostid)

let items = await z.item.get({
  hostids: hostids,
  search: {
    "name": ['Ping']
  },
  output: [ 'hostid', 'lastclock', 'lastns', 'lastvalue', 'prevvalue']
})
```

#### Alternative calls

If you want, like other packages, you can use the JSON-RPC 2.0 protocol directly with `z.call()`

```javascript
z.call({
  "jsonrpc": "2.0",
  "method": "apiinfo.version",
  "params": [],
  "id": 123456,
  "auth": null
})
```
or its shorter version

```javascript
z.call("apiinfo.version", [])
```

#### Error handling

All errors will be returned as JSON with an `error` variable defined. It will contain details of the error

```javascript
{
  error: {
    code: -32602,
    message: 'Invalid params.',
    data: 'Session terminated, re-login, please.',
    on_rpc: {
      jsonrpc: '2.0',
      method: 'user.checkAuthentication',
      params: { sessionid: '0' },
      id: 5,
      auth: null
    },
    url: 'http://example.com/zabbix/api_jsonrpc.php'
  }
}
```

## Methods

Currently all the functionalities of versions 3.0 to 5.0 are supported and tested. You can use all these different classes or methods:

#### Monitoring

The Zabbix API allows you to access history and other data gathered during monitoring.

|Class||||||
|---:|---|---|---|---|---|
| **history** | `.get()` |
| **trend** | `.get()` |
| **event** | `.acknowledge()` | `.get()` |
| **problem** | `.get()` |
| **service** | `.create()` | `.delete()` | `.get()` | `.getsla()` | `.update()` |
| **service.dependencies** | `.add()` | `.delete()` |
| **service.times** | `.add()` | `.delete()` |
| **task** | `.create()` |

#### Configuration

The Zabbix API allows you to manage the configuration of your monitoring system.

|Class||||||
|---:|---|---|---|---|---|
| **action** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **alert** | `.get()` |
| **application** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **application.mass** | `.add()` |
| **autoregistration** | `.get()` | `.update()` |
| **configuration** | `.export()` | `.import()` |
| **correlation** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **dashboard** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **discovered.service** | `.get()` |
| **discovered.host** | `.get()` |
| **discovery.check** | `.get()` |
| **discovery.rule** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **graph** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **graph.item** | `.get()` |
| **graph.prototype** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **host** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **host.mass** | `.add()` | `.remove()` | `.update()` |
| **host.group** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **host.group.mass** | `.add()` | `.remove()` | `.update()` |
| **host.interface** | `.create()` | `.delete()` | `.get()` | `.update()` | `.replace()` |
| **host.interface.mass** | `.add()` | `.remove()` |
| **host.prototype** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **httptest** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **item** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **item.prototype** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **maintenance** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **map**	| `.create()` | `.delete()` | `.get()` | `.update()` |
| **mediatype** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **screen** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **screen.item** | `.create()` | `.delete()` | `.get()` | `.update()` | `.updatebypos()` |
| **template** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **template.mass** | `.add()` | `.remove()` | `.update()` |
| **template.screen** | `.copy()` | `.create()` | `.delete()` | `.get()` | `.update()` |
| **template.screen.item** | `.get()` |
| **trigger**	| `.create()`	| `.delete()`	| `.get()`	| `.update()` |
| **trigger.dependencies** | `.add()` | `.delete()` |
| **trigger.prototype** | `.create()` | `.delete()` | `.get()` | `.update()` |

#### Administration

With the Zabbix API you can change administration settings of your monitoring system.

|Class||||||
|---:|---|---|---|---|---|
| **user** | `.check()` | `.login()` | `.logout()` |
| **user** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **user.group** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **user.macro** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **iconmap** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **image** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **valuemap** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **proxy** | `.create()` | `.delete()` | `.get()` | `.update()` |
| **script** | `.create()` | `.delete()` | `.execute()` | `.get()` | `.getbyhosts()` | `.update()` |
| **apiinfo** | `.version()` |



#### Basic parameters

Each classes has its own parameter definitions, but all `.get()` methods have some in common. The following parameters are supported by all `.get()` methods:

| Parameter | Type | Description |
|---:|:---:|---|
| **countOutput** |	`boolean` | Return the number of records in the result instead of the actual data. |
| **editable** | `boolean` | If set to `true` return only objects that the user has write permissions to. <br><br>Default: `false`|
| **excludeSearch** | `boolean` | Return results that do not match the criteria given in the search parameter. |
| **filter** | `object` | Return only those results that exactly match the given filter. <br><br>Accepts an array, where the keys are property names, and the values are either a single value or an array of values to match against. <br><br>Doesn't work for `text` fields. |
| **limit** | `integer` | Limit the number of records returned. |
| **output** | `query` | Object properties to be returned.<br><br>Default: `extend`. |
| **preservekeys** | `boolean` | Use IDs as keys in the resulting array. |
| **search** | `object` | Return results that match the given wildcard search (case-insensitive).<br><br>Accepts an array, where the keys are property names, and the values are strings to search for. If no additional options are given, this will perform a `LIKE “%…%”` search.<br><br>Works only for `string` and `text` fields. |
| **searchByAny** | `boolean` | If set to `true` return results that match any of the criteria given in the filter or search parameter instead of all of them.<br><br>Default: `false`. |
| **searchWildcardsEnabled** | `boolean` | If set to `true` enables the use of “*” as a wildcard character in the search parameter.<br><br>Default: `false`.|
| **sortfield** | `string`/`array` | Sort the result by the given properties. Refer to a specific API get method description for a list of properties that can be used for sorting. Macros are not expanded before sorting.<br><br>If no value is specified, data will be returned unsorted.
| **sortorder** | `string`/`array` | Order of sorting. If an array is passed, each value will be matched to the corresponding property given in the sortfield parameter.<br><br>Possible values are:<br>`ASC` - (default) ascending.<br>`DESC` - descending. |
| **startSearch** | `boolean` | The `search` parameter will compare the beginning of fields, that is, perform a `LIKE “…%”` search instead.<br><br>Ignored if `searchWildcardsEnabled` is set to `true`. |



#### Data types

The Zabbix API supports the following data types as input:

| Type | Description |
|---:|---|
| `boolean` | A boolean value, accepts either true or false. |
| `flag` | The value is considered to be ​true​ if it is passed and not equal to ​null​ and ​false​ otherwise. |
| `integer` | A whole number. |
| `float` | A floating point number. |
| `string` |	A text string. |
| `text` | A longer text string. |
| `timestamp` | A Unix timestamp. |
| `array` | An ordered sequence of values, that is, a plain array. |
| `object` | An associative array. |
| `query` | A value which defines, what data should be returned.<br><br>Can be defined as an array of property names to return only specific properties, or as one of the predefined values:<br>`extend` - returns all object properties.<br>`count` - returns the number of retrieved records, supported only by certain subselects. |

*Zabbix API always returns values as strings or arrays only.*

## License

This package is not developed by Zabbix LLC, is licensed under [ISC](LICENSE.md) and is provided "as is", without warranty of any kind, express or implied.

