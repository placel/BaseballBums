const { readFileSync, writeFileSync} = require('fs');
const path = require('path');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get("/count.txt", (req, res) => {
    const count = readFileSync('./lib/count.txt', 'utf-8');
    const newCount = parseInt(count) + 1;

    writeFileSync('./lib/count.txt', newCount.toString());
    res.sendFile(path.join(__dirname, '../lib/count.txt'));
});


app.listen(5001, () => console.log('http://localhost:5000/'));