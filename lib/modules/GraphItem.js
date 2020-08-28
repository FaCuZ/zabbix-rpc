/**
* @constructs GraphItem
*/
const GraphItem = function (req) {
	this.req = req
}


/**
* The method allows to retrieve graph items according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all graph items generated.
*/
GraphItem.prototype.get = function (params = []) {
	return this.req.jsonrpc('graphitem.get', params)
		.then(data => data.result)
}


module.exports = GraphItem
