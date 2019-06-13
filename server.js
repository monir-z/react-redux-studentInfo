const express = require('express')
const app = express()
const port = 3333

const db =  [['Monir', 'monirulhasann@gmail.com']]
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });

app.get('/student', (req, res) => res.json(db))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))