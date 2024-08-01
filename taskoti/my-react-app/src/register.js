export const handleSubmit = (event, setResponseMessage, setIsError) => {
    event.preventDefault();

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
                    throw new Error(errorResponse.message);
                });
            }
            return response.json();
        })
        .then(result => {
            setResponseMessage('Registration successful!');
            setIsError(false);
        })
        .catch(error => {
            setResponseMessage(`Registration failed: ${error.message}`);
            setIsError(true);
        });
};
