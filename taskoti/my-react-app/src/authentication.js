export function handleAuthenticationSubmit(event, setMessage) {
    event.preventDefault();

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
            setMessage('Authentication successful!');
            document.getElementById('authenticationResponse').className = ''; // Сброс класса для успешного сообщения
        })
        .catch(error => {
            setMessage(error.message);
            document.getElementById('authenticationResponse').className = 'error-message'; // Применение класса ошибки
        });
}