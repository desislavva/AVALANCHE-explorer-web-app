# Avalanche Explorer Web App

## Setup env file
Make sure to setup your .env file. There is template for env file - .env.sample

## Method 1 - Running only VueJS Web App locally

### Download repo
`git clone https://github.com/desislavva/avalanche-explorer-web-app.git`

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Method 2 - Docker container

### Building your image
Go to the directory that has your Dockerfile and run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command
```
docker build . -t <your username>/<your-image-name>
```

Your image will now be listed by Docker:
```
$ docker images

# Example
REPOSITORY                      	 TAG        ID              CREATED
node                            	 14         1934b0b038d1    5 days ago
<your username>/<your-image-name>    latest     d64d3505b0d2    1 minute ago
```

### Run the image
Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built:
```
docker run -it -p 8081:80 --rm --name <container-name> <your username>/<your-image-name>
```

### Check if app is running
```
$ docker ps

# Example
ID            IMAGE                                		COMMAND    ...   PORTS
ecce33b30ebf  <your username>/<your-image-name>:latest    		   ...   8081->80
```

## Method 3 - Docker containers for all needed apps (NOT TESTED)

### Settings for Ortelius API, Ortelius Indexer, MySQL, AvalancheGo, Redis
[Check official docs](https://github.com/ava-labs/ortelius/tree/master/docs)

### NodeJS REST API github repository
[Check github repository](https://github.com/desislavva/avalanche-API-server)

### Start docker-compose
`docker-compose -f docker-compose.yml up -d --remove-orphans`

### Stop docker-compose
`docker-compose -f docker-compose.yml stop`

### Logs for containers
`docker-compose -f docker-compose.yml logs -f`


