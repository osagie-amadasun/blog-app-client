import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from express');
});
app.get('/about', (req, res) => {
    res.send('Hello people, this is about API development');
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});