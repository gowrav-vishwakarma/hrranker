var express = require('express');
var router = express.Router();
const vnatk = require('vnatk-express-sequelize');

// Optional to use some auth middleware on this route
//router.use(require('./middleware/adminTokenChecker'));

const Models = require('../models');
module.exports = vnatk({
    Models: Models,
    router: router,
    read: true, // Optional, default true
    create: true, // Optional, default true
    update: true, // Optional, default true
    delete: true, // Optional, default true
    import: true, // Optional, default true
    actions: true, // Optional, default true

});
