const express = require('express')
const path    = require('path')
const app     = express()

app.use(express.static('js'))
app.use(express.static('css'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(3000, () => {
  console.log('Listening on Port 3000')
})
