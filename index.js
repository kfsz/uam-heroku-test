const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/home', (req, res) => {
    res.send({
        data: 'Hello World',
    });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
