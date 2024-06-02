function fetchArtists() {
    fetch('http://localhost:3000/artists')
        .then(function (response) { return response.json(); })
        .then(function (artists) {
            let list = document.getElementById('artists-list');
            artists.forEach(function (artist) {
                let item = document.createElement('li');
                item.textContent = artist.name;
                list.appendChild(item);
            });
        })
        .catch(function (error) {
            console.error('Error fetching artists:', error);
        });
}

function fetchAlbums() {
    fetch('http://localhost:3000/albums')
        .then(function (response) { return response.json(); })
        .then(function (albums) {
            let list = document.getElementById('albums-list');
            albums.forEach(function (album) {
                let item = document.createElement('li');
                item.textContent = album.title + ' by ' + album.artist;
                list.appendChild(item);
            });
        })
        .catch(function (error) {
            console.error('Error fetching albums:', error);
        });
}

fetchArtists();
fetchAlbums();