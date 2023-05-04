const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');



app.use(cors());

app.get('/', (req, res) =>{
    res.send('Chefs are coming')
});

app.get('/chef/:id', (req, res) =>{
    const id = req.params.id;
    const singleChef = chefs.find( (item)=>item.chef_id == id);
    res.send(singleChef);
}); 


app.get('/chefs', (req, res) =>{
    res.send(chefs);
})



app.listen(port, () =>{
    console.log(`Chefs API is coming on port: ${port} `);
})