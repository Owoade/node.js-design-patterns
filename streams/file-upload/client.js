const { createReadStream } = require("fs");
const { request } = require("http");
const { basename } = require("path");
const { pipeline } = require("stream");
const { createGzip } = require("zlib");

const file_name = basename('big-file.mkv');

const http_request_options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'PUT',
    headers: {
    'Content-Type': 'application/octet-stream',
    'Content-Encoding': 'gzip',
    'X-Filename': file_name
    }
}

const req = request(http_request_options, (res)=> {
    console.log({ res })
})

pipeline(
    createReadStream(file_name),
    createGzip(),
    req,
    () => console.log("Client: Done uploading")
)