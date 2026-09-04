const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

// app.get or app.post. or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about',(req,res)=>{
    res.send('Hello World2!')
})

app.get('/contact',(req,res)=>{
    res.send('Hello contact me!')
})
app.get('/blog',(req,res)=>{
    res.send('Hello blog!')
})

app.get('/blog/:slug',(req,res)=>{
    // logic to fetch intro to {slug} from the db
    // http://localhost:3000/blog/Paras
    res.send(`Hello ${req.params.slug} `)
})

app.get('/blog/:slug/:second',(req,res)=>{
    // logic to fetch intro to {slug} from the db
    res.send(`Hello ${req.params.slug} and ${req.params.second}`)
})


// app.get('/blog/intro-to-js',(req,res)=>{
//     // logic to fetch intro to js from the db
//     res.send('Hello blog Intro to js!')
// })

// app.get('/blog/intro-to-python',(req,res)=>{
//     // logic to fetch intro to python from the db
//     res.send('Hello blog Intro to python!')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// npm i --global nodemon