# Simple-app

Simple app created for learning purposes

## Stack

### Client

- Next.js
- React
- Typescript

### Server

- Node.js
- Express
- Typescript

### Devops

- Nginx (reverse proxy -> client only)
- Docker (+ compose)

## Local development

To run the app, you need to:

1.  install client-side deps

`$ cd ./client && yarn`

2.  install client-side deps

`$ cd ./server && yarn`

3.  run the app via docker-compose

`$ docker compose -f docker-compose.dev.yaml up`

And voilà, now just head to `http://localhost` and you should see the app running
