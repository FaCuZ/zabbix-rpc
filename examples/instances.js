const Zabbix = require('../Zabbix.js')

const z1 = new Zabbix('localhost')

z1.login()

console.log(z1.auth)


const z2 = new Zabbix('localhost')

z2.login()

console.log(z2.auth)
console.log(z1.auth)
