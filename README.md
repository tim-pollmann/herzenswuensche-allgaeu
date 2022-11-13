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

### Development

To build and run an interactive development version you need to run:

```sh
./build_run_dev.sh 
```

You should now be inside a docker container. Inside of it run:

```sh
npm i && npm run dev 
```

All changes made in this repository should be automatically reflected on the website.
