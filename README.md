# Starter template for ArangoDB Foxx service local development

This template is using
* `ES6+` (recommended)
* `Rollup` for bundle and convert to CJS format
* `Foxx-cli` to deploy

## Requirements
* A (local) ArangoDB instance

## Usage

Get a copy of this repository
```bash
npx degit samzlab/arangodb-foxx-rollup-starter
```

Install dependencies
```bash
npm install
```

Update the scripts (`arango:install` and `arango:update`) in the `package.json`
* database placeholder: `my-database`
* mount path placeholder: `/my-service-mount-path`

Other options can be found in the Foxx CLI repository at https://github.com/arangodb/foxx-cli.

Update the `src/manifest.json` file to your needs


## Develop your service

* Edit your lifecycle scripts in `src/manifest.json`
* Edit your service code in `src/`
* ...

## Deploy your service to ArangoDB

```bash
npm run arango:install
```
or if you are updating the service, then
```bash
npm run arango:update
```
