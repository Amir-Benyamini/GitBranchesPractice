const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const port = 3500
app.listen(port, function(){
	console.log(`server is up and running at port ${port}`)
})