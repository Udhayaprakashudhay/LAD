const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send("LAD")

})

app.get('/configs', (req, res) => {
    res.send(
        {
            "snippetProtection": true,
            "urlProtection": true,
            "fileProtection": true
        }
    )

})

app.listen(port, () => console.log(`LAD app listening on port ${port}!`))