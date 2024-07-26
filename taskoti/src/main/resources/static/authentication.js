document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('authenticationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное действие формы

        const formData = new FormData(event.target);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        };
        fetch('http://localhost:8080/api/v1/auth/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                document.getElementById('authenticationResponse').innerText = 'Authentication successful!';
            })
            .catch(error => {
                document.getElementById('authenticationResponse').innerText = 'Authentication failed!';
            });
    });
});
