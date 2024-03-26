# webpack-dynamic-proxy
Dynamic proxy for webpack. Watching config file in real time to avoid reboot webpack everytime.
## How to use?
Create a proxy.config.js on your project root directory.
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
Add your dynamic proxy to webpack config file.
```js
const createDynamicProxy = require('webpack-dynamic-proxy')

const config = {
    devServer: {
        proxy: createDynamicProxy(),
    },
}

/* a specify proxy config file */
const config = {
    devServer: {
        proxy: createDynamicProxy({
            filename: "path/to/file/proxy.config.js",
        }),
    },
}
```
Then will watch your proxy.config.js.
