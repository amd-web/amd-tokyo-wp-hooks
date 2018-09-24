const ApiBuilder = require('claudia-api-builder');
const AWS = require('aws-sdk');

const api = new ApiBuilder();
const dynamoDb = new AWS.DynamoDB.DocumentClient();

api.post(
  '/amd_works',
  function (request) {
    let params = {
      TableName: 'amd_works',
      Item: {
        ...request.body
      }
    };
    return dynamoDb.put(params).promise();
  },
  { success: 201 }
);


api.post(
  '/amd_news',
  function (request) {
    let params = {
      TableName: 'amd_news',
      Item: {
        ...request.body
      }
    };
    return dynamoDb.put(params).promise();
  },
  { success: 201 }
);

api.post(
  '/amd_projects',
  function(request) {
    let params = {
      TableName: 'amd_projects',
      Item: {
        ...request.body
      }
    };
    return dynamoDb.put(params).promise();
  },
  { success: 201 }
);

api.post(
  '/amd_people',
  function(request) {
    let params = {
      TableName: 'amd_people',
      Item: {
        ...request.body
      }
    };
    return dynamoDb.put(params).promise();
  },
  { success: 201 }
);

api.post(
  '/amd_recruitments',
  function(request) {
    let params = {
      TableName: 'amd_recruitments',
      Item: {
        id: request.body.id,
        title: request.body.title
      }
    };
    return dynamoDb.put(params).promise();
  },
  { success: 201 }
);

module.exports = api;
