const express = require('express');
const app = express();

const PORT = 3001;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`script-server running at port ${PORT}`);
});
