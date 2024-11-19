# Сервис по работе с пользователями

## Установка

1. `git clone https://github.com/lidforce/users-service-project.git`
2. `npm install`
3. Создать базу данных PostgreSQL и заменить значения переменных окружения в файле [.env](https://github.com/lidforce/users-service-project/blob/main/.env)
4. `npm run prisma:migrate`
5. `npm run start` или `npm start:dev`
   
## Команды

### Генерация пользователей

`npm run seed`

## API

### Изменение статуса проблем пользователей в false
```bash
curl -X PATCH http://localhost:3000/users/solve-issues
```

Возвращает количество пользователей с проблемами:
```JSON
{
    "usersHasIssues": 200446
}
```

### Удаление пользователей
```bash
curl -X PATCH http://localhost:3000/users/remove-users
```



