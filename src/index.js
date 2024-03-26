const fs = require('fs')
const path = require('path')

const createDynamicProxy = (options = {}) => {
    const {
        filename = path.resolve(process.cwd(), './proxy.config.js'),
    } = options
    let proxies = require(filename)
    fs.watchFile(filename, () => {
        delete require.cache[require.resolve(filename)]
        proxies = require(filename)
    })
    return proxies.map(({ target, ...rest }, index) => ({
        ...rest,
        router: () => proxies[index].target,
    }))
}

module.exports = createDynamicProxy
