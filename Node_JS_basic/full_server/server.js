const express = require('express');
const router = require('./routes/index.js');

const app = express();
const port = 1245;

router(app);

app.listen(port, () => {});

export default app;
