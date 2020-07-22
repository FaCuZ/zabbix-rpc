/**
 * @constructs History
 */
const History = function (req) {
	this.req = req
}

/**
 * The method allows to retrieve history data according to the given parameters. 
 *   
 * @param {Object} params - Parameters defining the desired output. 
 * @returns {Promise<array>} Retrieve item history data.
 */
History.prototype.get = function (params = []) {
	return this.req.jsonrpc("history.get", params)
		.then(data => data.result)
}

module.exports = History
