# webpack-dynamic-proxy
dynamic proxy for webpack.
## How to use?
create a proxy.config.js on your project root directory.
```js
module.exports = [
    {
        context: ["/api"],
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
            "^api": "",
        },
    },
]
```
add your dynamic proxy to webpack config file.
```js
const createDynamicProxy = require('webpack-dynamic-proxy')

const config = {
    proxy: createDynamicProxy(),
}

/* a specify proxy config file */
const config = {
    proxy: createDynamicProxy({
        filename: "path/to/file/proxy.config.js",
    }),
}
```
then will watch your proxy.config.js
