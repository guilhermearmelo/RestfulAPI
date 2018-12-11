var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Dado = require('./models/dado');

// connect to mongoose
mongoose.connect('mongodb://localhost/ditodb1', { useNewUrlParser: true });

var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use1 /api/dados');
});

app.get('/api/dados', function(req, res){
    Dado.getDados(function(err, dados){
        if(err){
            throw err;
        }
        res.json(dados);
    });
});

app.get('/api/dados/:_id', function(req, res){
    Dado.getDadoById(req.params._id, function(err, dado){
        if(err){
            throw err;
        }
        res.json(dado);
    });
});

app.post('/api/dados', function(req, res){
    var dado = req.body;
    Dado.addDado(dado, function(err, dado){
        if(err){
            throw err;
        }
        res.json(dado);
    });
});

app.put('/api/dados/:_id', function(req, res){
    var id = req.params._id;
    var dado = req.body;    
    Dado.updateDado(id, dado, {}, function(err, dado){
        if(err){
            throw err;
        }
        res.json(dado);
    });
});


app.delete('/api/dados/:_id', function(req, res){
    var id = req.params._id;
    var dado = req.body;    
    Dado.deleteDado(id, function(err, dado){
        if(err){
            throw err;
        }
        res.json(dado);
    });
});





app.listen(3000);
console.log('Running on port 3000');