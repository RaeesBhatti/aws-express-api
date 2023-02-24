const serverlessExpress = require('@vendia/serverless-express')
const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send(req.url)
})

module.exports.handler = serverlessExpress({ app });
