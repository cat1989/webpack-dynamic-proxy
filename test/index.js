const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/api/users', (req, res) => {
    res.send([
        {
            id: 1,
            name: 'John',
        },
    ]).end()
})

app.listen(3000)
