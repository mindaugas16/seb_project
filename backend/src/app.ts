import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from './middleware/cors';
import errorHandler from './middleware/error-handler';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(cors);
app.use(errorHandler);
app.use('/api', routes);

mongoose
    .connect(`mongodb://${process.env.MONGO_DB_ADDR}:${process.env.MONGO_DB_PORT}/project`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const server = http.createServer(app);

        server.listen(process.env.PORT || 3000, () => {
            console.log('Server is running on port', (server.address() as any).port);
        });
    })
    .catch((error: Error) => {
        throw error;
    });
