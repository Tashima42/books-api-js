const bodyParser = require('body-parser');

const cors = require('cors');

const express = require('express');

const {
  routes
} = require('./routes/index');

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(bodyParser.json({
  limit: '10mb'
}));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '10mb'
}));
routes(app);
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});