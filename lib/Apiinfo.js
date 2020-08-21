/**
* @constructs Apiinfo
*/
const Apiinfo = function (req) {
	this.req = req
}


/**
* This method allows to retrieve the version of the Zabbix API. 
*
* @returns {Promise<array>} Retrieve the version of the Zabbix API. 
*/
Apiinfo.prototype.version = function () {
	return this.req.jsonrpc('apiinfo.version', [], false)
		.then(data => data.result)
}


module.exports = Apiinfo
