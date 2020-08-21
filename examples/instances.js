const Zabbix = require('zabbix-rpc')

const z1 = new Zabbix('localhost1')

z1.login('user1','password1')

console.log(z1.auth)

const z2 = new Zabbix('localhost2')

z2.login('user2','password2')

console.log(z2.auth)
console.log(z1.auth)
