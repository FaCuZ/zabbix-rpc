const TemplateScreenItem = require('./TemplateScreenItem')

/**
* @constructs TemplateScreen
*/
const TemplateScreen = function (req) {
	this.req = req
	
	this.item = new TemplateScreenItem(this.req)
}


/**
* The method allows to retrieve template screens according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all template screens generated.
*/
TemplateScreen.prototype.get = function (params = []) {
	return this.req.jsonrpc('templatescreen.get', params)
		.then(data => data.result)
}


/**
* This method allows to copy template screens to the given templates. 
*
* @param {Object} params - Parameters defining the template screens to copy and the target templates. 
* @returns {Promise<array>} Returns true if the copying was successful. 
*/
TemplateScreen.prototype.copy = function (params = []) {
	// TODO: Implement copy(screenIds, templateIds)
	return this.req.jsonrpc('templatescreen.copy', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new template screen.  
*
* @param {Object<array>} params - TemplateScreens to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created template screens.
*/
TemplateScreen.prototype.create = function (params) {
	return this.req.jsonrpc('templatescreen.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete template screens.
*
* @param {Object<array>} params - IDs of the template screens to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted template screens.
*/
TemplateScreen.prototype.delete = function (params) {
	return this.req.jsonrpc('templatescreen.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing template screen. 
*
* @param {Object<array>} params - TemplateScreen properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated template screens.
*/
TemplateScreen.prototype.update = function (params) {
	return this.req.jsonrpc('templatescreen.update', params)
		.then(data => data.result)
}


module.exports = TemplateScreen
