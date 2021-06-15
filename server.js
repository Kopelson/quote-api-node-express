const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));


app.get('/api/quotes/random', (req, res, next) => {
    const quote = {
        quote: getRandomElement(quotes)
    };
    
    console.log(quote);
    if(quote){
        res.status(200).send(quote); 
    } else {
        res.status(404).send("Error: No Quote Found");
    }
    
})

app.listen(PORT, () => {
    console.log(`Server is now listening to port: ${PORT}`)
});