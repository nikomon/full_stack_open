const express =  require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
morgan('tiny');
let persons = [
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
  ];
const app = express();
app.use(morgan((tokens, req, res) => {
    return [
      new Date(Date.now()).toUTCString(),
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      req.method === 'POST' ? JSON.stringify(req.body) : null
    ].join(' ')}));
app.use(bodyParser.json());
app.get('/api/persons', (request, response) => {
    response.send(persons)
});

app.post('/api/persons', ({ body }, response) => {
    const { name, number } = body;
    if(!name || !number) {
        response.status(400);
        return response.send({ error: 'missing body'})
    }
    const personExists = persons.find(person => person.name == name);
    
    if(personExists) {            
        response.status(400);
        return response.send({ error: 'user alreay exists'})
    }
    persons = persons.concat({ name, number, id: Math.floor((Math.random() * 10000) + 1) })
    response.sendStatus(201)
});

app.get('/api/persons/:id', ({ params }, response) => {
    const { id } = params;
    const person = persons.find(person => person.id == id);
    if(person) {        
        return response.send(person)
    }
    return response.sendStatus(404);
});

app.delete('/api/persons/:id', ({ params }, response) => {
    const { id } = params;
    if(id) {
        const personExists = persons.find(person => person.id == id);
        if(personExists) {            
            persons = Object.assign(persons.filter(person => person.id != id));
            return response.sendStatus(204);
        }
    }
    return response.sendStatus(400);
});

app.get('/info', (request, response) => {
response.send(`<p>Phonebook has info for ${persons.length} people</p>
${new Date(Date.now())}`);
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
