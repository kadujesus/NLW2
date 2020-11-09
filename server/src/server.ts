import express from 'express';

const app = express();

app.post('/users', (request, response) => {
    const users = [
        {name: 'Thamires', age: 18 },
        {name: 'Kauan', age: 20 }
    ]
    
    
    return response.json(users)
});

app.listen(3333);

