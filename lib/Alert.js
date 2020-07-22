/**
 * @constructs Alert
 */
const Alert = function(req) {
	this.req = req
}

/**
 * The method allows to retrieve alerts according to the given parameters. 
 *   
 * @param {Object} params - Parameters defining the desired output. 
 * @returns {Promise<array>} Retrieve all alerts generated.
 */
Alert.prototype.get = function (params = []) {
	return this.req.jsonrpc("alert.get", params)
		.then(data => data.result)
}

module.exports = Alert
