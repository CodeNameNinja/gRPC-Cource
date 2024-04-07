const grpc = require('@grpc/grpc-js');
const {GreetServiceClient} = require("../proto/greet_grpc_pb")
const { GreetRequest } = require('../proto/greet_pb')

function doGreet(client) {
    const request = new GreetRequest()
    request.setFirstName('Bob')

    client.greet(request, (error, response) => {
        if (error) {
            console.error(error)
        } else {
            console.log(response.getResult())
        }
    })
}

function main() {
    const client = new GreetServiceClient(
        'localhost:5051',
        grpc.credentials.createInsecure()
    )

    doGreet(client)

}

main()