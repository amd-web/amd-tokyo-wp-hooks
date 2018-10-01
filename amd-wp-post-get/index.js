const ApiBuilder = require("claudia-api-builder");
const AWS = require("aws-sdk");

const api = new ApiBuilder();
const dynamoDb = new AWS.DynamoDB.DocumentClient();

// get list for {tableName}
api.get("/{tableName}", function(request) {
  const tableName = request.pathParams.tableName;
  return dynamoDb
    .scan({ TableName: tableName })
    .promise()
    .then(response => response.Items);
});

// get item for {id}
api.get("/{tableName}/{id}", function(request) {
  const id = request.pathParams.id;
  return dynamoDb
    .scan({
      TableName: tableName,
      Key: {
        id: id
      }
    })
    .promise()
    .then(response => response.Item);
});

module.exports = api;
