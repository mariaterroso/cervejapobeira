let express = require('express');
let mongoose = require('mongoose');
let app = express();

app.use(express.static('public'));

app.use(express.json());

// Connection
const uri = "mongodb+srv://mariaterroso41:poulson14@esmad-pgw.7seuv3y.mongodb.net/Musicstore?retryWrites=true&w=majority&appName=ESMAD-PGW"; // Change this to your MongoDB URI
mongoose.connect(uri)
    .then(function () {
        console.log('Connected to MongoDB');
    })
    .catch(function (err) {
        console.log('Error connecting to MongoDB', err);
    });

// Models
const artistSchema = new mongoose.Schema({
    name: String,
    genre: String
}, { versionKey: false });
const Artist = mongoose.model('Artist', artistSchema);

const albumSchema = new mongoose.Schema({
    title: String,
    artist: String,
    release_year: Number,
    tracks: Number
}, { versionKey: false });
const Album = mongoose.model('Album', albumSchema);

// Endpoints
app.post('/artists', function (req, res) {
    let newArtist = new Artist(req.body);
    newArtist.save()
        .then(function (artist) {
            res.send(artist);
        })
        .catch(function (err) {
            res.status(400).send({ message: 'Error adding artist', error: err });
        });
});

app.post('/albums', function (req, res) {
    let newAlbum = new Album(req.body);
    newAlbum.save()
        .then(function (album) {
            res.send(album);
        })
        .catch(function (err) {
            res.status(400).send({ message: 'Error adding album', error: err });
        });
});

app.get('/artists', function (req, res) {
    let query = {};
    if (req.query.genre) {
        query.genre = req.query.genre;
    }
    Artist.find(query)
        .then(function (artists) {
            res.send(artists);
        })
        .catch(function (err) {
            res.status(500).send({ message: 'Error fetching artists', error: err });
        });
});

app.get('/albums', function (req, res) {
    let query = {};
    if (req.query.artist) {
        query.artist = req.query.artist;
    }
    Album.find(query)
        .then(function (albums) {
            res.send(albums);
        })
        .catch(function (err) {
            res.status(500).send({ message: 'Error fetching albums', error: err });
        });
});

app.put('/artists/:id', function (req, res) {
    Artist.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(function (artist) {
            if (artist) {
                res.send(artist);
            } else {
                res.status(404).send({ message: 'Artist not found' });
            }
        })
        .catch(function (err) {
            res.status(500).send({ message: 'Error updating artist', error: err });
        });
});

app.put('/albums/:id', function (req, res) {
    Album.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(function (album) {
            if (album) {
                res.send(album);
            } else {
                res.status(404).send({ message: 'Album not found' });
            }
        })
        .catch(function (err) {
            res.status(500).send({ message: 'Error updating album', error: err });
        });
});

app.delete('/artists/:id', function (req, res) {
    Artist.findByIdAndDelete(req.params.id)
        .then(function (artist) {
            if (artist) {
                res.send({ message: 'Artist deleted successfully!' });
            } else {
                res.status(404).send({ message: 'Artist not found' });
            }
        })
        .catch(function (err) {
            res.status(500).send({ message: 'Error deleting artist', error: err });
        });
});

app.delete('/albums/:id', function (req, res) {
    Album.findByIdAndDelete(req.params.id)
        .then(function (album) {
            if (album) {
                res.send({ message: 'Album deleted successfully!' });
            } else {
                res.status(404).send({ message: 'Album not found' });
            }
        })
        .catch(function (err) {
            res.status(500).send({ message: 'Error deleting album', error: err });
        });
});

app.listen(3000, function () {
    console.log('Server running on http://localhost:3000');
});