import express from 'express';
import controlRoute from '../full_server/routes/index';

const app = express();
const port = 1245;

controlRoute(app);

app.listen(port, () => {});

export default app;
