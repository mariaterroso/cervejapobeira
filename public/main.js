function fetchCerveja() {
    fetch('http://localhost:5500/cerveja')
        .then(function (response) { return response.json(); })
        .then(function (cerveja) {
            let list = document.getElementById('cerveja-list');
            cerveja.forEach(function (cerveja) {
                let item = document.createElement('li');
                item.textContent = cerveja.title;
                list.appendChild(item);
            });
        })
        .catch(function (error) {
            console.error('Error fetching cerveja:', error);
        });
}

function fetchPacksmistos() {
    fetch('http://localhost:5500/packsmistos')
        .then(function (response) { return response.json(); })
        .then(function (packsmistos) {
            let list = document.getElementById('packsmistos-list');
            packsmistos.forEach(function (packsmistos) {
                let item = document.createElement('li');
                item.textContent = packsmistos.title;
                list.appendChild(item);
            });
        })
        .catch(function (error) {
            console.error('Error fetching packsmistos:', error);
        });
}

fetchCerveja();
fetchPacksmistos();