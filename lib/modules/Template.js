const TemplateScreen = require('./TemplateScreen')

/**
* @constructs Template
*/
const Template = function (req) {
	this.req = req
	this.mass = new Mass()
	
	this.screen = new TemplateScreen(this.req)
}


/**
* The method allows to retrieve templates according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all templates generated.
*/
Template.prototype.get = function (params = []) {
	return this.req.jsonrpc('template.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new template.  
*
* @param {Object<array>} params - Templates to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created templates.
*/
Template.prototype.create = function (params) {
	return this.req.jsonrpc('template.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete templates.
*
* @param {Object<array>} params - IDs of the templates to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted templates.
*/
Template.prototype.delete = function (params) {
	return this.req.jsonrpc('template.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing template. 
*
* @param {Object<array>} params - Template properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated templates.
*/
Template.prototype.update = function (params) {
	return this.req.jsonrpc('template.update', params)
		.then(data => data.result)
}



/**
* @constructs Mass
*/
const Mass = function() {}


/**
* This method allows to simultaneously add multiple related objects to all the given templates.
*
* @param {Object<array>} params - Parameters containing the IDs of the templates to update and the objects to add to all the templates. 
* @returns {Promise<array>} Returns an object containing the IDs of the updated templates.
*/
Mass.prototype.add = function (params) {
	return this.req.jsonrpc('template.massadd', params)
		.then(data => data.result)
}


/**
* This method allows to remove related objects from multiple templates. 
*
* @param {Object<array>} params - This method allows to remove related objects from multiple templates.
* @returns {Promise<array>} Returns an object containing the IDs of the updated templates.
*/
Mass.prototype.remove = function (params) {
	return this.req.jsonrpc('template.massremove', params)
		.then(data => data.result)
}


/**
* This method allows to simultaneously replace or remove related objects and update properties on multiple templates.  
*
* @param {Object<array>} params - Parameters containing the IDs of the templates to update and the properties that should be updated. 
* @returns {Promise<array>} Returns an object containing the IDs of the updated templates.
*/
Mass.prototype.update = function (params) {
	return this.req.jsonrpc('template.massupdate', params)
		.then(data => data.result)
}


module.exports = Template
