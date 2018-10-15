# Docker Node Monorepo

## Build

By default, `bin/start.sh` brings up the development containers.

```sh
./bin/start.sh
```

To bring up a specific environment, source the associated `.env` file.

```sh
# production
sourc env/prod.env
./bin/start.sh
```

The application will be available at `http://localhost`.