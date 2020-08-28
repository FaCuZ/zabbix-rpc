/**
* @constructs Task
*/
const Task = function (req) {
	this.req = req
}


/**
**
* This method allows to create a new task (such as checking items or low-level discovery rules without config reload). 
*
* @param {Object<array>} params - Tasks to create. 
* @returns {Promise<array>} Returns an object containing the IDs of the created tasks.
*/
Task.prototype.create = function (params) {
	return this.req.jsonrpc('task.create', params)
		.then(data => data.result)
}


module.exports = Task
