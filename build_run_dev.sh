#!/bin/bash

. .env

sudo docker build \
    --tag $DOCKER_IMAGE \
    --file Dockerfile.dev \
    --build-arg port=$PORT \
    .

sudo docker run \
    --interactive \
    --tty \
    --publish $PORT:$PORT \
    --volume $(pwd):/workdir \
    --workdir /workdir \
    $DOCKER_IMAGE
