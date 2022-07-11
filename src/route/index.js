const express = require('express');
const route = express.Router();

import {
    index,
    detail
} from "../controller/berita";
route.get('/berita', index)
route.post('/berita', index)
route.get('/berita/:id', detail)
route.post('/berita/:id', detail)
module.exports = route;