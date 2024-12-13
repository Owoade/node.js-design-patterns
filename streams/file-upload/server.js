const { createWriteStream } = require("fs");
const { createServer } = require("http");
const { basename, join } = require("path");
const { pipeline } = require("stream");
const { createGunzip } = require("zlib");

const server = createServer((req, res)=>{

    //The essence of using basename() to remove any possible path from the name of the received file.
    const file_name = basename(req.headers['x-filename']);

    const destination = join('uploaded-files', file_name);

    pipeline(
        req,
        createGunzip(),
        createWriteStream(destination),
        () => {
            console.log("Server: Done uploading");
            res.end("Done here")
        }
    )

})

server.listen(3000, ()=> console.log("Server running on port 3000"));