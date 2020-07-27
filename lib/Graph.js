const GraphItem = require('./GraphItem')
const GraphPrototype = require('./GraphPrototype')

/**
* @constructs Graph
*/
const Graph = function (req) {
	this.req = req
	
	this.item = new GraphItem(this.req)
	this.prototype = new GraphPrototype(this.req)
}


/**
* The method allows to retrieve graphs according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all graphs generated.
*/
Graph.prototype.get = function (params = []) {
	return this.req.jsonrpc('graph.get', params)
		.then(data => data.result)
}


/**
**
* This method allows to create new graph.  
*
* @param {Object<array>} params - Graphs to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created graphs.
*/
Graph.prototype.create = function (params) {
	return this.req.jsonrpc('graph.create', params)
		.then(data => data.result)
}


/**
* This method allows to delete graphs.
*
* @param {Object<array>} params - IDs of the graphs to delete.
* @returns {Promise<array>} Returns an object containing the IDs of the deleted graphs.
*/
Graph.prototype.delete = function (params) {
	return this.req.jsonrpc('graph.delete', params)
		.then(data => data.result)
}


/**
* This method allows to update existing graph. 
*
* @param {Object<array>} params - Graph properties to be updated.
* @returns {Promise<array>} Returns an object containing the IDs of the updated graphs.
*/
Graph.prototype.update = function (params) {
	return this.req.jsonrpc('graph.update', params)
		.then(data => data.result)
}


module.exports = Graph
