const express = require('express')
var app = require('express')();
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('index'))

app.get('/two', (req, res) => res.render('two'))

app.get('/three', (req, res) => res.render('three'))


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
