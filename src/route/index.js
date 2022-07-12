const express = require('express');
const route = express.Router();

import {
    index,
    detail,
    hapus
} from "../controller/berita";
route.get('/berita', index)
route.post('/berita', index)
route.get('/berita/:id', detail)
route.post('/berita/:id', detail)
route.post('/berita/:id/hapus', hapus)
module.exports = route;