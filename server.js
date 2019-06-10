const express = require('express')
const app = express()
const port = 3000

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