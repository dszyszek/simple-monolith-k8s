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

#### Local

- Nginx (reverse proxy)
- Docker
- Docker compose

#### Production

- Docker
- Kubernetes

## Local development

### Idea

Locally, we run 3 services, namely:

- client-side server (next js, to serve client-side code for development purposes)
- server-side server
- reverse proxy (to connect the two)

### How to run

To run the app, you need to:

1.  install client-side deps

`$ cd ./web_client && yarn`

2.  install client-side deps

`$ cd ./web_server && yarn`

3.  run the app via docker-compose

`$ docker compose -f docker-compose.dev.yaml up`

And voilà, now just head to `http://localhost` and you should see the app running

## Production

On production, the situation is different - we will not have any client-side server. Instead, client code is build as static files, which then are served to the client. Beacuse of that we also don't need any reverse-proxy, from now on everything is handled by web server.

### Building the production image

To build production Docker image, you need to:

1.  build client-side code:

`$ cd ./web_client && yarn prod:build`

2. compile the server-side code:

`$ cd ./web_server && yarn run compile`

3. build the image

`$ docker build -t simple_app ./`

<b>NOTE: build the image in the root directory of the project</b>

### Running the production image

After you successfuly built the image, you can run it with

`$ docker run -it -p 3000:3000 simple_app`

### Deploying with Kubernetes

TBA
