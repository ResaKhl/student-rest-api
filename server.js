const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!') )
app.get('/user/:userId', (req, res) => fetchUser(req, res))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

let fetchUser = function(req, res) {
    cons
    console.log(req.params);
}