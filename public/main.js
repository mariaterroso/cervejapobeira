function fetchCerveja() {
    fetch('http://localhost:5500/cerveja')
        .then(function (response) { return response.json(); })
        .then(function (cerveja) {
            let list = document.getElementById('cerveja-list');
            cerveja.forEach(function (cerveja) {
                let item = document.createElement('li');
                item.classList.add('products-item');
                let image = document.createElement('img');
                image.src = cerveja.imageURL;
                image.alt = cerveja.title;
                image.style.width = '150px'; // Adjust as necessary
                image.style.height = '250px'; // Adjust as necessary

                let button1 = document.createElement('button');
                button1.textContent = '1';
                button1.classList.add('button-one');
                button1.addEventListener('click', function() {
                  
                });

                let button2 = document.createElement('button');
                button2.textContent = 'ADICIONAR AO CARRINHO';
                button2.addEventListener('click', function() {
                   
                });

                item.textContent = `${cerveja.title} - ${cerveja.price}`;
                list.appendChild(item);
                item.appendChild(image);
                item.appendChild(button1);
                item.appendChild(button2);
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
                item.classList.add('products-item');
                let image = document.createElement('img');
                image.src = packsmistos.imageURL;
                image.alt = packsmistos.title;
                image.style.width = '200px'; // Adjust as necessary
                image.style.height = '200px'; // Adjust as necessary

                let button1 = document.createElement('button');
                button1.textContent = '1';
                button1.classList.add('button-one');
                button1.addEventListener('click', function() {
                  
                });

                let button2 = document.createElement('button');
                button2.textContent = 'ADICIONAR AO CARRINHO';
                button2.addEventListener('click', function() {
                   
                });

                item.textContent = `${packsmistos.title} - ${packsmistos.price}`;
                list.appendChild(item);
                item.appendChild(image);
                item.appendChild(button1);
                item.appendChild(button2);
            });
        })
        .catch(function (error) {
            console.error('Error fetching packsmistos:', error);
        });
}

function fetchPacksharmonizacao() {
    fetch('http://localhost:5500/packsharmonizacao')
        .then(function (response) { return response.json(); })
        .then(function (packsharmonizacao) {
            let list = document.getElementById('packsharmonizacao-list');
            packsharmonizacao.forEach(function (pack) {
                let item = document.createElement('li');
                item.classList.add('products-item');
                let image = document.createElement('img');
                image.src = pack.imageURL;
                image.alt = pack.title;
                image.style.width = '200px'; // Adjust as necessary
                image.style.height = '200px'; // Adjust as necessary

                let button1 = document.createElement('button');
                button1.textContent = '1';
                button1.classList.add('button-one');
                button1.addEventListener('click', function() {
                   
                });

                let button2 = document.createElement('button');
                button2.textContent = 'ADICIONAR AO CARRINHO';
                button2.addEventListener('click', function() {
                   
                });

                item.textContent = `${pack.title} - ${pack.price}`;
                list.appendChild(item);
                item.appendChild(image);
                item.appendChild(button1);
                item.appendChild(button2);
            });
        })
        .catch(function (error) {
            console.error('Error fetching packsharmonizacao:', error);
        });
}

function fetchTapas() {
    fetch('http://localhost:5500/tapas')
        .then(function (response) { return response.json(); })
        .then(function (tapas) {
            let list = document.getElementById('tapas-list');
            tapas.forEach(function (tapa) {
                let item = document.createElement('li');
                item.classList.add('products-item');
                let image = document.createElement('img');
                image.src = tapa.imageURL;
                image.alt = tapa.title;
                image.style.width = '200px'; // Adjust as necessary
                image.style.height = '200px'; // Adjust as necessary
                
                let button1 = document.createElement('button');
                button1.textContent = '1';
                button1.classList.add('button-one');
                button1.addEventListener('click', function() {
                    
                });

                let button2 = document.createElement('button');
                button2.textContent = 'ADICIONAR AO CARRINHO';
                button2.addEventListener('click', function() {
                    
                });

                item.textContent = `${tapa.title} - ${tapa.price}`;
                list.appendChild(item);
                item.appendChild(image);
                item.appendChild(button1);
                item.appendChild(button2);
            });
        })
        .catch(function (error) {
            console.error('Error fetching tapas:', error);
        });
}

function fetchVestuario() {
    fetch('http://localhost:5500/vestuario')
        .then(function (response) { return response.json(); })
        .then(function (vestuario) {
            let list = document.getElementById('vestuario-list');
            vestuario.forEach(function (item) {
                let listItem = document.createElement('li');
                listItem.classList.add('products-item');
                let image = document.createElement('img');
                image.src = item.imageURL;
                image.alt = item.title;
                image.style.width = '200px'; // Adjust as necessary
                image.style.height = '200px'; // Adjust as necessary
                
                let button1 = document.createElement('button');
                button1.textContent = '1';
                button1.classList.add('button-one');
                button1.addEventListener('click', function() {
                    
                });

                let button2 = document.createElement('button');
                button2.textContent = 'ADICIONAR AO CARRINHO';
                button2.addEventListener('click', function() {
                    
                });

                listItem.textContent = `${item.title} - ${item.price}`;
                list.appendChild(listItem);
                listItem.appendChild(image);
                listItem.appendChild(button1);
                listItem.appendChild(button2);
            });
        })
        .catch(function (error) {
            console.error('Error fetching vestuario:', error);
        });
}

function fetchAcessorios() {
    fetch('http://localhost:5500/acessorios')
        .then(function (response) { return response.json(); })
        .then(function (acessorios) {
            let list = document.getElementById('acessorios-list');
            acessorios.forEach(function (item) {
                let listItem = document.createElement('li');
                listItem.classList.add('products-item');
                let image = document.createElement('img');
                image.src = item.imageURL;
                image.alt = item.title;
                image.style.width = '200px'; // Adjust as necessary
                image.style.height = '200px'; // Adjust as necessary

                let button1 = document.createElement('button');
                button1.textContent = '1';
                button1.classList.add('button-one');
                button1.addEventListener('click', function() {
                    
                });

                let button2 = document.createElement('button');
                button2.textContent = 'ADICIONAR AO CARRINHO';
                button2.addEventListener('click', function() {
                    
                });

                listItem.textContent = `${item.title} - ${item.price}`;
                list.appendChild(listItem);
                listItem.appendChild(image);
                listItem.appendChild(button1);
                listItem.appendChild(button2);
            });
        })
        .catch(function (error) {
            console.error('Error fetching acessorios:', error);
        });
}

fetchCerveja();
fetchPacksmistos();
fetchPacksharmonizacao();
fetchTapas();
fetchVestuario();
fetchAcessorios();