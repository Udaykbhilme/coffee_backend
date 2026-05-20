require('dotenv').config()
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter',(req,res)=>{
    res.send('the_vantage_')
});

app.get('/login',(req, res)=>{
    res.send('<h1>please login at coffee with mug</h1>')
})

app.get('/youtube',(req, res)=>{
    res.send('<h2>damn boii, we on youtube! where ur channel tho</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});