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
    if(quote){
        res.status(200).send(quote); 
    } else {
        res.status(404).send("Error: No Quote Found");
    }
})

app.get('/api/quotes', (req, res, next) => {
    const quote = {
        quotes: quotes
    }

    if (quote) {
        res.send(quote);
    } else {
        res.status(404).send("Error: Quote database missing");
    }
})

app.post('/api/quotes', (req, res, next) => {
    const quote = req.query.quote;
    const person = req.query.person;
    
    const newQuote = {
        quote: {
            quote: quote,
            person: person
        }
    }

    if(quote && person){
        quotes.push({
            quote: quote,
            person: person
        })
        res.status(202).send(newQuote);
    } else {
        res.status(400).send();
    }
})

app.listen(PORT, () => {
    console.log(`Server is now listening to port: ${PORT}`)
});