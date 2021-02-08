const cors = require('cors');
const express = require('express');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/',async(req, res) =>{

  try {
    //response é a resposta do axios, mas eu tiro o data de dentro
    // const {data} = await axios('https://jsonplaceholder.typicode.com/users')
    return res.json([
      {name: 'jeff'},
      {name: 'xxxx'}
    ])

    return res.json(data)  
  } catch (error) {
    console.error(error)
  }
 
})

app.listen('3000')
