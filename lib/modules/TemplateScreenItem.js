/**
* @constructs TemplateScreenItem
*/
const TemplateScreenItem = function (req) {
	this.req = req
}


/**
* The method allows to retrieve template screen items according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all template screen items generated.
*/
TemplateScreenItem.prototype.get = function (params = []) {
	return this.req.jsonrpc('templatescreenitem.get', params)
		.then(data => data.result)
}


module.exports = TemplateScreenItem
