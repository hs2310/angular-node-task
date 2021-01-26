const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

const port = 3001

app.post('/name', (req, res) => {
    
    res.status(200).json({
        message : req.body.name + " received from backend" 
    })
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})