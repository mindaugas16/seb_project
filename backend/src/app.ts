import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from './middleware/cors';

const app = express();

app.use(bodyParser.json());
app.use(cors);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port', (server.address() as any).port);
});
