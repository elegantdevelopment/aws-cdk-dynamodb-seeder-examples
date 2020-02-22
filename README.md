# aws-cdk-dynamodb-seeder-examples

Example usage of aws-cdk-dynamodb-seeder

## How do I use it

Install the dependencies your favourite package manager:

```sh
yarn
```

### Deploying the stacks

This command will deploy the seeder stack (and the table stack if not already deployed):

```sh
cdk [--profile profile] deploy seeder-stack --require-approval never
```

### Tearing down the seed

```sh
cdk [--profile profile] destroy seeder-stack --force
```
