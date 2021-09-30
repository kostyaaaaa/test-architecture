class Server {
    runNodeJsServer() {
        // run server
        return this;
    }

    connectToDB() {
        // connect to DB
        return this;
    }

    useControllers() {
        // use controllers
        return this;
    }
}

const server = new Server();

server
    .runNodeJsServer()
    .connectToDB()
    .useControllers();