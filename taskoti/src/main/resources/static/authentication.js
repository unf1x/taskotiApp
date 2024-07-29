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
            .then(response => {
                if (!response.ok) {
                    throw new Error('Wrong password or login');
                }
                return response.json();
            })
            .then(result => {
                document.getElementById('authenticationResponse').innerText = 'Authentication successful!';
                document.getElementById('authenticationResponse').className = ''; // Сброс класса для успешного сообщения
            })
            .catch(error => {
                document.getElementById('authenticationResponse').innerText = error.message;
                document.getElementById('authenticationResponse').className = 'error-message'; // Применение класса ошибки
            });
    });
});
