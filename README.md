# zlib-module.js

compact zlib, deflate, inflate, zip library in JavaScript, support CommonJS

[zlib.js](https://github.com/imaya/zlib.js)


## Usage

### Web

```html
<script src="https://unpkg.com/zlib-module-js/bin/gzip.min.js"></script>
<script src="https://unpkg.com/zlib-module-js/bin/gunzip.min.js"></script>

<script>
    function stringToArrayBuffer(str) {
        const encoder = new TextEncoder()
        const uint8Array = encoder.encode(str)
        return uint8Array
    }

    function arrayBufferToString(buffer) {
        const decoder = new TextDecoder()
        return decoder.decode(buffer)
    }

    const gzip_module = new Zlib.Gzip(stringToArrayBuffer("hello"))
    var compressed = gzip_module.compress();
    console.log(compressed)

    var gunzip_module = new Zlib.Gunzip(compressed)
    var plain = gunzip_module.decompress()
    console.log(plain)
    console.log(arrayBufferToString(plain)) //hello
</script>
```

### Node / CommonJS

```javascript
const gzip = require("zlib-module-js/bin/gzip.min.js");
const gunzip = require("zlib-module-js/bin/gunzip.min.js");

const gzip_module = new gzip.Zlib.Gzip(Buffer.from("hello"))
var compressed = gzip_module.compress()
console.log(compressed)

var gunzip_module = new gunzip.Zlib.Gunzip(compressed)
var plain = gunzip_module.decompress()
console.log(plain)
console.log(Buffer.from(plain).toString()) //hello
```

