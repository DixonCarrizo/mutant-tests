
# mutant-tests
![Build Status](https://img.shields.io/badge/Build-passing-success>)
![Service version](https://img.shields.io/badge/Version-v0.0.1-informational)

## Service description
This is a proposal to validate **DNA** sequences and detect if the sample belongs to a human **non-mutant** or a human **mutant**.

### How do I get set up? ###

* Must be installed nodejs and npm
  * MacOs [how to install](https://medium.com/javascript-comunidad/c%C3%B3mo-instalar-node-js-y-npm-en-mac-9d80f26fb88d)
  * Ubuntu [how to install](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)
  * Windows [how to install](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
* Install npm dependencies
```sh
npm install
```
* Deploy service
```sh
npm start
```
### API

`GET /health` Check if service is OK

`POST /mutant` Validates **DNA** sequence


## Environment variables
```
PORT=3000
QUERY_LOGS=true
DB_CLIENT=postgresql
DB_HOST=localhost
DB_MIGRATION_TABLE=knex_migrations
DB_NAME=dna_validations
DB_PASSWORD=dna-password
DB_PORT=5432
DB_USERNAME=dna-username
DEFAULT_DB_MAX_POOL=10
DEFAULT_DB_MIN_POOL=2
```

## Authors

Dixon Carrizo
