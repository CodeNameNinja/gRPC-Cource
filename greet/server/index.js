const grpc = require('@grpc/grpc-js')

const addr = "localhost:5051";

function cleanup(server) {
    server.tryShutdown(() => {
        console.log('Server shut down')
    })
}

function main() {
    const server = new grpc.Server()

    process.on('SIGINT', () => {
        console.log('Server shutting down')
        cleanup(server)
    })

    server.bindAsync(addr, grpc.ServerCredentials.createInsecure(), (error, _) => {
        if (error) {
            return cleanup(server)
        }
        console.log(`Server running at ${addr}`)
    });
}

main()