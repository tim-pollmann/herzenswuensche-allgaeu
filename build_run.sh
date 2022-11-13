#!/bin/bash

. .env

sudo docker build \
    --tag $DOCKER_IMAGE \
    --file Dockerfile \
    --build-arg port=$PORT \
    .

sudo docker run \
    --detach \
    --publish $PORT:$PORT \
    $DOCKER_IMAGE
