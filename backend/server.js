const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const PORT = 4000;
const userRoutes = express.Router();

let User = require('./models/user');
let Product = require('./models/product');

app.use(cors());
app.use(bodyParser.json());

// Connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})

// API endpoints

// Getting all the users
userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// Adding a new user
userRoutes.route('/add-user').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
});

// Getting a user by id
userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

// Getting a user by username
userRoutes.route('/login').post(function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    var query = User.findOne({ 'username': username})
    query.select("password");
    query.exec()
        .then(queryresult => {
            queryresult.password == password ? res.json({"auth":"verified"}) : res.json({"auth":"invalid"})
        });
});

// Adding a new Product
userRoutes.route('/vendor-add-product').post(function(req, res) {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'Product': 'Product added successfully'});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
});

userRoutes.route('/vendor/lists').post(function(req, res) {
    console.log("mebhe aaya");
    let vendor_name = req.body.vname;
    console.log(vendor_name)
    var query1 = Product.find({'vname':vendor_name});
    query1.select("name price quantity vname");
    query1.exec().then(products => res.json(products));
});


// // Getting all the products
// userRoutes.route('/vendor-product-list').get(function(req, res) {
//     console.log("bhagwaan");
//     let product = new Product(req.body);
//     product.save()
//         .then(product => {
//             res.status(200).json({'Product': 'Product added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('Error');
//         });
// });

app.use('/', userRoutes);
app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});
