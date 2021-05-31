const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('The first middleware!');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('The second middleware!');
//     res.send('<h1>The Second Middleware Response</h1>')
// });

app.use('/users', (req, res, next) => {
    console.log('The /users route middleware!');
    res.send('<h1>This Is the Users Response!</h1>')
});

app.use('/', (req, res, next) => {
    console.log('The / route middleware!');
    res.send('<h1>This Is / Route Response!</h1>')
});

app.listen(3000);