/**
 * @constructs Problem
 * @version 4.0+
 */
const Problem = function (req) {
	this.req = req
}

/**
 * The method allows to retrieve problems according to the given parameters. 
 * @version 4.0+
 *   
 * @param {Object} params - Parameters defining the desired output. 
 * @returns {Promise<array>} Retrieve trigger problem events.
 */
Problem.prototype.get = function (params = []) {
	return this.req.jsonrpc("problem.get", params)
		.then(data => data.result)
}

module.exports = Problem
