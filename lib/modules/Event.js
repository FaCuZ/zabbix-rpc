/**
* @constructs Event
*/
const Event = function (req) {
	this.req = req
}


/**
* The method allows to retrieve events according to the given parameters. 
*
* @param {Object} params - Parameters defining the desired output. 
* @returns {Promise<array>} Retrieve all events generated.
*/
Event.prototype.get = function (params = []) {
	return this.req.jsonrpc('event.get', params)
		.then(data => data.result)
}


/**
* This method allows to update events. 
*
* @param {Object} params - Parameters containing the IDs of the events and update operations that should be performed. 
* @returns {Promise<array>} Returns an object containing the IDs of the updated events.
*/
Event.prototype.acknowledge = function (params = []) {
	return this.req.jsonrpc('event.acknowledge', params)
		.then(data => data.result)
}

module.exports = Event
