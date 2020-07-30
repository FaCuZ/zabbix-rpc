/**
* @constructs Discovery
*/
const Discovery = function (req) {
	this.req = req
	
	this.check = new Check()
	this.rule = new Rule()
}


/**
* @constructs Check
*/
const Check = function() {}


/**
* The method allows to retrieve discovery checks according to the given parameters. 
*
* @param {Object<array>} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve discovery checks for a discovery rule.
*/
Check.prototype.get = function (params) {
	return this.req.jsonrpc('dcheck.get', params)
		.then(data => data.result)
}



/**
* @constructs Rule
*/
const Rule = function (req) {
	this.req = req
}


/**
* The method allows to retrieve discovery rules according to the given parameters.  
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all discovery rules.
*/
Rule.prototype.get = function (params = []) {
	return this.req.jsonrpc('drule.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new discrovery rules.  
*
* @param {Object<array>} params - Discrovery rules to create.  
* @returns {Promise<array>} Returns an object containing the IDs of the created discrovery rules.
*/
Rule.prototype.create = function (params) {
	return this.req.jsonrpc('drule.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete discovery rules.
*
* @param {Object<array>} params - IDs of the discovery rules to delete. 
* @returns {Promise<array>} Returns an object containing the IDs of the deleted discovery rules.
*/
Rule.prototype.delete = function (params) {
	return this.req.jsonrpc('drule.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing discovery rules.
*
* @param {Object<array>} params - Discovery rule properties to be updated. 
* @returns {Promise<array>} Returns an object containing the IDs of the updated discovery rules.
*/
Rule.prototype.update = function (params) {
	return this.req.jsonrpc('drule.update', params)
		.then(data => data.result)
}


module.exports = Discovery
