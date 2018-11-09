var express = require('express');

var app = express();

// Example...
app.get('/x', function (req, res) {
    res.send([{ name: 'x1' }, { name: 'x1' }]);
});
app.get('/x/:id', function (req, res) {
    res.send({ id: req.params.id, name: "The Name", description: "description" });
});

app.listen(3000);
console.log('Listening on port 3000...');