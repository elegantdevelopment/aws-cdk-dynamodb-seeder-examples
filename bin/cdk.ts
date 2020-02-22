#!/usr/bin/env node
import { App, Stack, RemovalPolicy } from "@aws-cdk/core";
import { Seeder } from "aws-cdk-dynamodb-seeder";
import { Table, AttributeType } from "@aws-cdk/aws-dynamodb";

const app = new App();

// represents your current stack that contains a Table to be seeded
const tableStack = new Stack(app, "table-stack");
const table = new Table(tableStack, "table", {
  tableName: "SeederTable",
  partitionKey: { name: "Id", type: AttributeType.STRING },
  removalPolicy: RemovalPolicy.DESTROY
})

// represents the Seeder stack (deploy/destroy events trigger seed functions)
const seederStack = new Stack(app, "seeder-stack");
new Seeder(seederStack, "seeder", {
  table,
  tableName: "SeederTable",
  setup: [{ Id: "delete me!" }, { Id: "leave me!" }],
  teardown: [{ Id: "delete me!" }],
  refreshOnUpdate: true
});
seederStack.addDependency(tableStack);
