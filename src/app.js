// core node modules
const path = require('path')

// npm packages
const express = require('express')
const hbs = require('hbs')

// local consts
const app = express()
const port = process.env.PORT || 3000

// express config paths
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Welcome',
        name: 'Jeffrey Kaplan'
    })
})

app.get('*', (req,res) => {
    res.render('404', {
        title: '404: Page not found',
        errorMessage: 'The specified url does not exist',
        name: 'Jeffrey Kaplan'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})