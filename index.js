const express = require('express')
const app = express()
const port = 7890


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('X-Powered-By', 'JWW');
    next();
});

app.use(express.static('public'))


// http://localhost:3000/?url=https://www.test.nl
app.get('/', (req, res) =>{
//   res.send('Helllo')  

const url = req.query.url 
console.log(url)

const test1 = 'https://pagespeed.web.dev/report?url='
const test2 = 'https://wave.webaim.org/report#/'
const test3a = 'https://securityheaders.com/?q='
const test3b = '&followRedirects=on'
const test4 = 'https://sitecheck.sucuri.net/results/'
const test5 = 'https://internet.nl/site/'
// const test6 = 'https://'


res.json([
    { testurl: test1 + url },
    { testurl: test2 + url },
    { testurl: test3a + url + test3b},
    { testurl: test4 + url },
    { testurl: test5 + url },
    // { testurl: test6 + url },
        ]
    )
})


// http://localhost:3000/url?url=https://www.test.nl
// notused:
app.get('/url', (req, res) =>{
    //   res.send('Helllo')  
    
    const url = req.query.url 
    console.log(url)
    
    const test1 = 'https://goog.nl/?q='
    const test2 = 'https://goog.de/?q='
    const test3 = 'https://goog.es/?q='
    
    res.json(
        { one: test1 + url ,
         two: test2 + url ,
         three: test3 + url },    
        )
    })


app.listen(port, ()=> {
    console.log(`App listening on port ${port} for you!!`)
})

exports.hey = app