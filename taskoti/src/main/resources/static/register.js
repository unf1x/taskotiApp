document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное действие формы

        const formData = new FormData(event.target);
        const data = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        fetch('http://localhost:8080/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errorResponse => {
                        // Отображаем сообщение об ошибке из JSON
                        throw new Error(errorResponse.message);
                    });
                }
                return response.json();
            })
            .then(result => {
                document.getElementById('registerResponse').innerText = 'Registration successful!';
                document.getElementById('registerResponse').className = ''; // Сброс класса для успешного сообщения
            })
            .catch(error => {
                document.getElementById('registerResponse').innerText = `Registration failed: ${error.message}`;
                document.getElementById('registerResponse').className = 'error-message'; // Применение класса ошибки
            });
    });
});
