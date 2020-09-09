const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))


const port = 3500
app.listen(port, function(){
	console.log(`server is up and running at port ${port}`)
})