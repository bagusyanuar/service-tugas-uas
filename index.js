const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;
const fileUpload = require('express-fileupload');
app.use(fileUpload({
    createParentPath: true
}))
app.use(express.json());
app.use(express.static('public'))
const route = require('./src/route');
app.use(route);
app.listen(PORT, () => {
    console.log(`Application Running At http://192.168.37.143:${PORT}`);
});