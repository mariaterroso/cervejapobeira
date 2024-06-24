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

// Define schemas and models for all collections
const schemas = {
    cerveja: new mongoose.Schema({
        title: String,
        price: String,
        imageURL: { type: String, required: true }
    }, { versionKey: false }),
    
    packsmistos: new mongoose.Schema({
        title: String,
        price: String,
        imageURL: { type: String, required: true }
    }, { versionKey: false }),
    
    packsharmonizacao: new mongoose.Schema({
        title: String,
        price: String,
        imageURL: { type: String, required: true }
    }, { versionKey: false }),
    
    tapas: new mongoose.Schema({
        title: String,
        price: String,
        imageURL: { type: String, required: true }
    }, { versionKey: false }),
    
    vestuario: new mongoose.Schema({
        title: String,
        price: String,
        imageURL: { type: String, required: true }
    }, { versionKey: false }),
    
    acessorios: new mongoose.Schema({
        title: String,
        price: String,
        imageURL: { type: String, required: true }
    }, { versionKey: false })
};

const models = {
    Cerveja: mongoose.model('Cerveja', schemas.cerveja),
    PacksMistos: mongoose.model('PacksMistos', schemas.packsmistos),
    Packsharmonizacao: mongoose.model('Packsharmonizacao', schemas.packsharmonizacao),
    Tapas: mongoose.model('Tapas', schemas.tapas),
    Vestuario: mongoose.model('Vestuario', schemas.vestuario),
    Acessorios: mongoose.model('Acessorios', schemas.acessorios)
};

// Helper function to create route handlers for each collection
function createRouteHandlers(modelName) {
    const Model = models[modelName];

    app.get(`/${modelName.toLowerCase()}`, (req, res) => {
        let query = {};
        if (req.query.title) query.title = req.query.title;
        if (req.query.price) query.price = req.query.price;

        Model.find(query)
            .then(items => res.send(items))
            .catch(err => res.status(500).send({ message: `Error fetching ${modelName.toLowerCase()}`, error: err }));
    });

    app.post(`/${modelName.toLowerCase()}`, (req, res) => {
        const newItem = new Model(req.body);
        newItem.save()
            .then(item => res.status(201).send(item))
            .catch(err => res.status(500).send({ message: `Error creating ${modelName.toLowerCase()}`, error: err }));
    });

    app.put(`/${modelName.toLowerCase()}/:id`, (req, res) => {
        Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(item => res.send(item))
            .catch(err => res.status(500).send({ message: `Error updating ${modelName.toLowerCase()}`, error: err }));
    });

    app.delete(`/${modelName.toLowerCase()}/:id`, (req, res) => {
        Model.findByIdAndDelete(req.params.id)
            .then(() => res.status(204).send())
            .catch(err => res.status(500).send({ message: `Error deleting ${modelName.toLowerCase()}`, error: err }));
    });
}

// Create route handlers for all collections
['Cerveja', 'PacksMistos', 'Packsharmonizacao', 'Tapas', 'Vestuario', 'Acessorios'].forEach(createRouteHandlers);


app.listen(5500, function () {
    console.log('Server running on http://localhost:5500');
});