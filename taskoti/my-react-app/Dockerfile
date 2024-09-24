# Используем официальный образ Node.js как базовый
FROM node:18-alpine AS build

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы в рабочую директорию
COPY . .

# Создаем сборку приложения
RUN npm run build

# Используем официальный образ nginx для обслуживания статических файлов
FROM nginx:alpine

# Копируем сборку приложения из первого контейнера
COPY --from=build /app/dist /usr/share/nginx/html

# Экспонируем порт
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
