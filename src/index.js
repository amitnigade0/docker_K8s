const express = require('express')
const app = express()
const port = 3000
 
app.get('/dashboard', (req, res) => {
  res.send('Welcome to dashboard page...!')
})
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})