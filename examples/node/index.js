const gzip= require("../../bin/gzip.min.js");
const gunzip= require("../../bin/gunzip.min.js");

const gzip_module = new gzip.Zlib.Gzip(Buffer.from("hello"));
var compressed = gzip_module.compress();
console.log(compressed)
var gunzip_module = new gunzip.Zlib.Gunzip(compressed);
var plain = gunzip_module.decompress();
console.log(Buffer.from(plain).toString()) //hello