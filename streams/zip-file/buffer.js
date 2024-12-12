const buffer = require('buffer');
const { readFileSync, writeFileSync } = require('fs');
const { gzipSync } = require('zlib');

const start_time = Date.now();

console.log(buffer.constants.MAX_LENGTH);

const file_data = readFileSync('big-file.mkv');

const zipped_data = gzipSync(file_data);

writeFileSync(`big-file.gz`, zipped_data );

console.log( Date.now() - start_time )