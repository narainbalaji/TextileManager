var express = require('express')
var app = express()


// Initializing the app.
app.use(express.static('public'))

// Views
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
