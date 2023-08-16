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
- Kubernetes (with hpa; local cluster -> minikube)
- Nginx

## Local development

### Idea

Locally, we run 3 services, namely:

- client-side server (next js, to serve client-side code for development purposes)
- server-side server
- reverse proxy (to connect the two)

On the dev environment, the front-end calls api by directly requesting server-side docker container (routing handled by nginx reverse proxy).

On prod env, to let front-end code request the api we need to pass server's URL via NEXT_PUBLIC_API_BASE env variable (in `.env.production`, learn more in `Building the production image` section below).
The traffic will be routed and handled by FE nginx server + K8S

<h1>`diagrams for dev and prod envs to be added`</h1>

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

On production, we have separate prod images for Front-end app and Back-end API -> FE will be served by nginx server, the BE will serve only as an API. Whole project will be deployed by K8S, but before we run any `kubectl` commands, we need to prepare Docker images first.

### Building the production image

#### Building Front-end prod image

To build FE production Docker image, you need to:

1. create `.env.production` file in `/web_client` dir with proper env variables inside. Please check the `/web_client/env.example` file for reference.

2. build FE Docker container

`$ cd ./web_client && docker build -t simple-app-ui ./`

#### Building Back-end prod image

To build BE production Docker image, you need to:

1. build BE image

`$ cd ./web_server && docker build -t simple-app-server ./`

### Running with Kubernetes (locally, on minikube)

Now we're able to deploy the app to K8S! We'll deploy the app to local K8S cluster and for that we'll use `minikube`. To deploy the app you need to:

1. Run minikube

`$ minikube start`

2. Enable the metrics server

`$ minikube addons enable metrics-server`

Make sure the metrics server is running, with:

`$ kubectl top pod`

(it should print out the metrics for pods)

If you see no output, run:

`$ kubectl describe hpa`

And check for the errors, especially `AbleToScale` and `ScalingActive` in `Conditions` section

3. Deploy the application

`$ kubectl apply -f ./deployment`

That will run the deployment itself, along with its Load Balancer and Horizontal Autoscaler

Great! Now your app is deployed. To see the application in the browser you need to do one more thing - tunnel the traffic from minikube to Load Balancer, to do so, run:

`$ minikube tunnel`

NOTE: run that command in separate terminal window, as it needs to be running when you want to see the app in web browser

#### Dashboard

If you want to see the dashboard, run:

`$ minikube dashboard`

which will automatically open up the browser tab with dashboard!

#### Local testing the auto scaler

If you want to test wether the horizontal autoscaler works, you can run

`$ kubectl run -i --tty load-generator --rm --image=busybox --restart=Never -- /bin/sh -c "while sleep 0.01; do wget -q -O- http://simple-app-server-service; done"`

while the app is running. Give it a couple of minutes and observe the results on the dashboard.
