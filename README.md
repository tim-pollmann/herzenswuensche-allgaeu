# A new Website for Herzenswünsche Allgäu e.V.

## Build and Run

Before starting you need to specify the following environment variables in a file called `.env` at the root of this repository:

- `DB_URI`
- `URL`
- `PORT`
- `DOCKER_IMAGE`

### Production

To build and run a production version of this project you just need to run:

```sh
./build_run.sh 
```

All changes made in this repository will only be reflected on the website when you stop the docker container and run the script again.

### Development

To build and run an interactive development version you need to run:

```sh
./build_run_dev.sh 
```

You should now be inside a docker container. Inside of it run:

```sh
npm i && npm run dev 
```

All changes made in this repository will now be automatically reflected on the website. You may need to reload the website to see the changes.
