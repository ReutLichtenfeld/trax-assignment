const express = require('express');

const app = express();

app.get('/api/whos-there', (req, res) => {
    res.send( 'Hi Trax! This is Reut Lichtenfeld :)' )
});

//START SERVER
const port = 3000;

app.listen(port, () => {
    console.log(`app running on port ${port}...`);
});