import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import { createTerminus } from '@godaddy/terminus';
import router from "./router";

const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());




const server = http.createServer(app);

const healthCheck = async () => {
    return Promise.resolve(
    );
};

const options = {
    healthChecks: {
        '/healthcheck': healthCheck, // A function returning a promise indicating service health
    },


    onSignal: () => {
        console.log('Server is starting cleanup');
        // here you can close database connections, stop background tasks, etc
        return Promise.all([
            // For example, close MongoDB connection
            mongoose.connection.close(),
        ]);
    },

    // This will be called right before exiting
    onShutdown: async () => {
        console.log('Cleanup finished, server is shutting down');
    }
};

// Use terminus to add graceful shutdown and health checks to the server
createTerminus(server, options);

const uri = process.env.MONGODB_URI;


server.listen(8080, '0.0.0.0', () => {
    console.log('Server running on http://localhost:8080/')
});

mongoose.Promise = Promise;

mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error('MongoDB connection error:', error));

mongoose.connection.on('error', (error: Error) => console.log(error))
app.use('/', router())
