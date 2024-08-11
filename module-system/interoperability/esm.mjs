import { fileURLToPath } from "url";
import { name, age, gender } from  "./common.cjs";
import { createRequire } from "module";
import { dirname } from "path";

console.log( name, age, gender );

export const hobby = [];

// creating a polyfill for missing references in ESM

const require = createRequire(import.meta.url);

const obj = require('./common.cjs');

console.log( obj )

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

console.log({
  __dirname,
  __filename,
});