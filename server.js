let express = require('express');
let mongoose = require('mongoose');
let app = express();

app.use(express.static('public'));

app.use(express.json());

// Connection
const uri = "mongodb+srv://mariaterroso41:poulson14@esmad-pgw.7seuv3y.mongodb.net/PobeiraLoja?retryWrites=true&w=majority&appName=ESMAD-PGW"; // Change this to your MongoDB URI
mongoose.connect(uri)
    .then(function () {
        console.log('Connected to MongoDB');
    })
    .catch(function (err) {
        console.log('Error connecting to MongoDB', err);
    });

// Models
const cervejaSchema = new mongoose.Schema({
    title: String,
    price: String,
    imageURL: { type: String, required: true }
}, { versionKey: false });
const Cerveja = mongoose.model('Cerveja', cervejaSchema);

const packsmistosSchema = new mongoose.Schema({
    title: String,
    price: String
}, { versionKey: false });
const Packsmistos = mongoose.model('Packsmistos', packsmistosSchema);

// Endpoints
app.post('/cerveja', function (req, res) {
    let newCerveja = new Cerveja(req.body);
    newCerveja.save()
        .then(function (cerveja) {
            res.send(cerveja);
        })
        .catch(function (err) {
            res.status(400).send({ message: 'Error adding cerveja', error: err });
        });
});

app.post('/packsmistos', function (req, res) {
    let newPacksmistos = new Packsmistos(req.body);
    newPacksmistos.save()
        .then(function (packsmistos) {
            res.send(packsmistos);
        })
        .catch(function (err) {
            res.status(400).send({ message: 'Error adding packsmistos', error: err });
        });
});

app.get('/cerveja', function (req, res) {
    let query = {};
    if (req.query.title) {
        query.title = req.query.title;
    }
    if (req.query.price) {
        query.price = req.query.price;
    }
    Cerveja.find(query)
        .then(function (cerveja) {
            res.send(cerveja);
        })
        .catch(function (err) {
            res.status(500).send({ message: 'Error fetching cerveja', error: err });
        });
});

app.get('/packsmistos', function (req, res) {
    let query = {};
    if (req.query.title) {
        query.title = req.query.title;
    }
    Packsmistos.find(query)
        .then(function (packsmistos) {
            res.send(packsmistos);
        })
        .catch(function (err) {
            res.status(500).send({ message: 'Error fetching packsmistos', error: err });
        });
});

app.put('/cerveja/:id', function (req, res) {
    Cerveja.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(function (cerveja) {
            if (cerveja) {
                res.send(cerveja);
            } else {
                res.status(404).send({ message: 'Cerveja not found' });
            }
        })
        .catch(function (err) {
            res.status(500).send({ message: 'Error updating cerveja', error: err });
        });
});

app.put('/packsmistos/:id', function (req, res) {
    Packsmistos.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(function (packsmistos) {
            if (packsmistos) {
                res.send(packsmistos);
            } else {
                res.status(404).send({ message: 'Packsmistos not found' });
            }
        })
        .catch(function (err) {
            res.status(500).send({ message: 'Error updating packsmistos', error: err });
        });
});

app.delete('/cerveja/:id', function (req, res) {
    Cerveja.findByIdAndDelete(req.params.id)
        .then(function (cerveja) {
            if (cerveja) {
                res.send({ message: 'Cerveja deleted successfully!' });
            } else {
                res.status(404).send({ message: 'Cerveja not found' });
            }
        })
        .catch(function (err) {
            res.status(500).send({ message: 'Error deleting cerveja', error: err });
        });
});

app.delete('/packsmistos/:id', function (req, res) {
    Packsmistos.findByIdAndDelete(req.params.id)
        .then(function (packsmistos) {
            if (packsmistos) {
                res.send({ message: 'Packsmistos deleted successfully!' });
            } else {
                res.status(404).send({ message: 'Packsmistos not found' });
            }
        })
        .catch(function (err) {
            res.status(500).send({ message: 'Error deleting packsmistos', error: err });
        });
});

app.listen(5500, function () {
    console.log('Server running on http://localhost:5500');
});