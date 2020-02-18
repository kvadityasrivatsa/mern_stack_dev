const mongoose = require('mongoose');

let Product = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
    	type: Number
    },
    cur_quant: {
    	type: Number
    },
    status: {
    	type: String
    },
    vname: {
        type: String
    }
});

module.exports = mongoose.model('Product', Product);