const ApiBuilder = require('claudia-api-builder');
const AWS = require('aws-sdk');

const api = new ApiBuilder();
const dynamoDb = new AWS.DynamoDB.DocumentClient();

api.get('/amd_works', function(request) {
  return dynamoDb
    .scan({ TableName: 'amd_works' })
    .promise()
    .then(response => response.Items);
});

module.exports = api;
