// Функция для обработки отправки формы регистрации
export const handleSubmit = (event, setResponseMessage, setIsError, navigate) => {
    // Отменяет стандартное поведение формы (перезагрузку страницы)
    event.preventDefault();

    // Создает объект FormData из элемента формы
    const formData = new FormData(event.target);
    // Извлекает данные из формы и упаковывает их в объект
    const data = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        password: formData.get('password')
    };

    // Отправляет POST-запрос на сервер для регистрации
    fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST', // Метод запроса
        headers: {
            'Content-Type': 'application/json' // Тип содержимого запроса
        },
        body: JSON.stringify(data) // Преобразует данные в формат JSON для отправки на сервер
    })
        .then(response => {
            // Проверяет, успешен ли ответ
            if (!response.ok) {
                // Если ответ не успешен, извлекает сообщение об ошибке и выбрасывает исключение
                return response.json().then(errorResponse => {
                    throw new Error(errorResponse.message);
                });
            }
            // Преобразует ответ в формат JSON, если все в порядке
            return response.json();
        })
        .then(result => {
            // Сохраняет полученные данные (токен, имя и ID пользователя) в localStorage
            localStorage.setItem('token', result.token);
            localStorage.setItem('fullName', result.fullName);
            localStorage.setItem('userId', result.userId);

            // Устанавливает сообщение о успешной регистрации
            setResponseMessage('Registration successful!');
            setIsError(false);

            // Перенаправляет пользователя на главную страницу после успешной регистрации
            navigate('/');
        })
        .catch(error => {
            // Устанавливает сообщение об ошибке и флаг ошибки
            setResponseMessage(`Registration failed: ${error.message}`);
            setIsError(true);
        });
};
