/**
* @constructs Trend
*/
const Trend = function (req) {
	this.req = req
}


/**
* The method allows to retrieve trend data according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve item trend data.
*/
Trend.prototype.get = function (params = []) {
	return this.req.jsonrpc('trend.get', params)
		.then(data => data.result)
}


module.exports = Trend
