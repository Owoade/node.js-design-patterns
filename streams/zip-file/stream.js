const { createReadStream, createWriteStream } = require("fs");
const { pipeline } = require("stream");
const { createGzip } = require("zlib");

const start_time = Date.now();

const big_file_read_stream = createReadStream('big-file.mkv');

const zip_write_stream = createGzip();

const big_file_write_stream = createWriteStream('big-file.gz');

pipeline(
    big_file_read_stream,
    zip_write_stream,
    big_file_write_stream,
    () => console.log(`completed it took ${Date.now() - start_time} ms`,)
)