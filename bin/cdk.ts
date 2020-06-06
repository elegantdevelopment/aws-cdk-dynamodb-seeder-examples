#!/usr/bin/env node
import { App, Stack, RemovalPolicy } from '@aws-cdk/core';
import { Table, AttributeType } from '@aws-cdk/aws-dynamodb';
import { Seeder } from 'aws-cdk-dynamodb-seeder';

const app = new App();

// represents your current stack that contains a Table to be seeded
const tableStack = new Stack(app, 'app-stack');
const table = new Table(tableStack, 'table', {
  tableName: 'AppTable',
  partitionKey: { name: 'Id', type: AttributeType.STRING },
  removalPolicy: RemovalPolicy.DESTROY,
});

// represents the Seeder stack (deploy/destroy events trigger seed functions)
const seederStack = new Stack(app, 'seeder-stack');
new Seeder(seederStack, 'seeder', {
  table,
  setup: [
    { Id: '1001', Note: 'remains after teardown' },
    { Id: '1002', Note: 'deleted by teardown' },
    { Id: '1003', Note: 'deleted by teardown' },
    { Id: '1004', Note: 'deleted by teardown' },
    { Id: '1005', Note: 'remains after teardown' },
  ],
  teardown: [{ Id: '1002' }, { Id: '1003' }, { Id: '1004' }],
  refreshOnUpdate: true,
});
seederStack.addDependency(tableStack);
