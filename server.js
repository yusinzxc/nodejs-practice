const express = require('express')
const bodyParser = require('body-parser')

const app = express()

/* MiddleWare */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

/* Routes */
const viewersRoutes = require('./routes/Viewers')
app.use('/',viewersRoutes)


const PORT = 8000

app.listen(PORT, () => {
  console.log(`  Server is Running!!
  Local:            http://localhost:${PORT}`)
})
