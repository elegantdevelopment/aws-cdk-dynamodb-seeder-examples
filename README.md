# aws-cdk-dynamodb-seeder-examples

Example usage of [aws-cdk-dynamodb-seeder](https://github.com/elegantdevelopment/aws-cdk-dynamodb-seeder)

## Compatibility

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/elegantdevelopment/aws-cdk-dynamodb-seeder-examples/aws-cdk-dynamodb-seeder)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/elegantdevelopment/aws-cdk-dynamodb-seeder-examples/@aws-cdk/core)

## How do I use it

Install the dependencies using your favourite package manager:

```sh
yarn
```

### Deploying the stacks

This command will deploy the seeder stack (and the table stack if not already deployed):

```sh
cdk [--profile profile] deploy seeder-stack --require-approval never
```

### Tearing down the seed

To teardown (remove) seed data from the table:

```sh
cdk [--profile profile] destroy seeder-stack --force
```
