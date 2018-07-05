'use strict';

const compression = require('compression');
const bodyParser = require('body-parser');
const SwaggerExpress = require('swagger-express-mw');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./src/api/swagger/swagger.yaml');

const app = require('express')();

const config = {
  appRoot: __dirname,
  swaggerSecurityHandlers: {
    Bearer: function (req, authOrSecDef, scopesOrApiKey, cb) {
      cb(); 
    }
  } 
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  app.use(compression());
  app.use(bodyParser.json());
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  //app.use(midAcceptToken);

  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 3003;  
  app.listen(port);

  console.log('KEY 1', process.env.KEY);
  console.log('try this:\ncurl http://127.0.0.1:' + port);
});

module.exports = app; // for testing