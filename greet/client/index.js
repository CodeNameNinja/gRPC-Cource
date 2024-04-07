const grpc = require('@grpc/grpc-js');
const {GreetServiceClient } = require("../proto/greet_grpc_pb")

function main(){
    const client = new GreetServiceClient(
        'localhost:5051',
        grpc.credentials.createInsecure()
    )

    client.greet({name: 'Alice'}, (error, response) => {
        if (error) {
            console.error(error)
        } else {
            console.log(response.getMessage())
        }
    })
}