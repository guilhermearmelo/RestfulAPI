var mongoose = require('mongoose');

// dado Schema
var dadoSchema = mongoose.Schema({
    event: {
        type: String
    },
    timestamp: {
        type: String
    }
});

var Dado = module.exports = mongoose.model('Dado', dadoSchema);

// Get Dados
module.exports.getDados = function(callback, limit){
    Dado.find(callback).limit(limit);
}

// Get Dado by id
module.exports.getDadoById = function(id, callback, limit){
    Dado.findById(id, callback);
}

// Add Dado
module.exports.addDado = function(dado, callback){
    Dado.create(dado, callback);
}

// Update Dado
module.exports.updateDado = function(id, dado, options, callback){
    var query = {_id : id};
    var update = {
        event: dado.event,
        timestamp: dado.timestamp
    }
    Dado.findOneAndUpdate(query, update, options, callback);
}

// Delete Dado
module.exports.deleteDado = function(id, callback){
    var query = {_id : id};

    Dado.remove(query, callback);
}