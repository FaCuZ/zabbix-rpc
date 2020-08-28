/**
* @constructs Dashboard
*/
const Dashboard = function (req) {
	this.req = req
}


/**
* The method allows to retrieve dashboards according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all dashboards generated.
*/
Dashboard.prototype.get = function (params = []) {
	return this.req.jsonrpc('dashboard.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new dashboard.  
*
* @param {Object<array>} params - Dashboards to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created dashboards.
*/
Dashboard.prototype.create = function (params) {
	return this.req.jsonrpc('dashboard.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete dashboards.
*
* @param {Object<array>} params - IDs of the dashboards to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted dashboards.
*/
Dashboard.prototype.delete = function (params) {
	return this.req.jsonrpc('dashboard.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing dashboard. 
*
* @param {Object<array>} params - Dashboard properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated dashboards.
*/
Dashboard.prototype.update = function (params) {
	return this.req.jsonrpc('dashboard.update', params)
		.then(data => data.result)
}


module.exports = Dashboard
