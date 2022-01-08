const express = require('express')
const app = express()
const port = 3000


// http://localhost:3000/?url=https://www.test.nl
app.get('/', (req, res) =>{
//   res.send('Helllo')  

const url = req.query.url 
console.log(url)

const test1 = 'https://goog.nl/?q='
const test2 = 'https://goog.de/?q='
const test3 = 'https://goog.es/?q='

res.json([
    { one: test1 + url },
    { two: test2 + url },
    { three: test3 + url },
        ]
    )
})


// http://localhost:3000/url?url=https://www.test.nl

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