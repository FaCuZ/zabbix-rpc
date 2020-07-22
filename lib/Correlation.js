/**
* @constructs Correlation
*/
const Correlation = function (req) {
	this.req = req
}


/**
* The method allows to retrieve correlations according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all correlations generated.
*/
Correlation.prototype.get = function (params = []) {
	return this.req.jsonrpc('correlation.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new correlation.  
*
* @param {Object<array>} params - Correlations to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created correlations.
*/
Correlation.prototype.create = function (params) {
	return this.req.jsonrpc('correlation.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete correlations.
*
* @param {Object<array>} params - IDs of the correlations to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted correlations.
*/
Correlation.prototype.delete = function (params) {
	return this.req.jsonrpc('correlation.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing correlation. 
*
* @param {Object<array>} params - Correlation properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated correlations.
*/
Correlation.prototype.update = function (params) {
	return this.req.jsonrpc('correlation.update', params)
		.then(data => data.result)
}


module.exports = Correlation