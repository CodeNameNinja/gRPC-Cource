const pb = require('../proto/greet_pb')

function greet(call, callback) {
    const request = call.request
    const response = new pb.GreetResponse()
    response.setResult(`Hello ${request.getName()}`)
    callback(null, response)
}

module.exports = {
    greet
}