const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./data")

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false
})


server.get('/', function(req, res){
    const data= {
        title: "Hello World",
        description:"As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        links: [
            {name: "E-mail", url:"mailto:oi@rocketseat.com.br"},
            {name: "Telephone", url:"tel:+5547992078767"}
        ]
    }
    return res.render('index', {data})
})

server.get('/portfolio', function(req, res){
    return res.render('portfolio', {items: courses})
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;

    const course =  courses.find(function(course){
        if(course.id == id){
            return true
        }
    })  /* pra ser um array */
    if(!course){
        return res.send("Video not found!")
    }

    return res.render('bootcamp', { item: course })
});

server.get('/about', function(req, res){
    return res.render('about')
})


server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function(){
    console.log('server is running')
})