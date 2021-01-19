# Kubide-board

## Description

ApiREST utilizando NestJS, construcción basada en las siguientes historias de usuario

- Como USUARIO quiero poder llamar al API, es decir, quiero poder tener un servidor local al que hacer una llamada HTTP y que me devuelva algo.
- Como USUARIO quiero poder llamar al API para crear notas.
- Como USUARIO quiero poder llamar al API para consultar las notas.
- Como USUARIO quiero poder llamar al API para consultar una sóla nota.
- Como USUARIO quiero poder llamar al API para marcar como favorita una nota.
- Como USUARIO quiero poder llamar al API para consultar las notas marcadas como favoritas.

1. Persistencia en MariaDB con TypeORM

2. Session-express para gestionar sesiones

3. Se parte de las siguientes entidades: User, Note, Fav

Realizado con:

<p align="center">
<a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="160" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Endpoints

### Registrar un usuario

```bash
curl --location --request POST 'localhost:3000/user/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Dani",
    "mail": "dani@kk4.es",
    "password": "12345"
}'
```

### Login de un usuario

```bash
curl --location --request POST 'localhost:3000/user/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "mail": "test@example.com",
    "password": "12345"
}'
```

### comprobar session

```bash
curl --location --request GET 'localhost:3000/user' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AKHskqimak8vfCPjh4lbhF42TXz8J_1Ei.4jJgbnxtAOii7nAQyPhjINkFWwYFwvVktJ6ZBkMubCI'
```

### Crear una nota

```bash
curl --location --request POST 'localhost:3000/note' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AKHskqimak8vfCPjh4lbhF42TXz8J_1Ei.4jJgbnxtAOii7nAQyPhjINkFWwYFwvVktJ6ZBkMubCI' \
--data-raw '{
    "message": "hola mundo!"
}'
```

### consultar notas

```bash
curl --location --request GET 'localhost:3000/note' \
--header 'Content-Type: application/json' \
```

### consultar una nota

```bash
curl --location --request GET 'localhost:3000/note/{uuid}' \
--header 'Content-Type: application/json' \
```

### marcar nota favorita

```bash
curl --location --request POST 'localhost:3000/fav' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AKHskqimak8vfCPjh4lbhF42TXz8J_1Ei.4jJgbnxtAOii7nAQyPhjINkFWwYFwvVktJ6ZBkMubCI' \
--data-raw '{
    "note": "{uuid}"
}'
```

### lista de notas favoritas

```bash
curl --location --request GET 'localhost:3000/fav' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AKHskqimak8vfCPjh4lbhF42TXz8J_1Ei.4jJgbnxtAOii7nAQyPhjINkFWwYFwvVktJ6ZBkMubCI' \
```
