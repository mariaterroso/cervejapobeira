document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', document.getElementById('email').value);

    fetch('http://localhost:5500/users', {
        method: 'POST',
        body: formData
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('Success:', data);
            alert('User registered successfully!');
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
});
