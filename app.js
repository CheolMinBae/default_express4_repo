import express from 'express'; //express middleware 
import bodyParser from 'body-parser'; //for request body read 
// import path from 'path'; //for get server path 
import Lottery from './routes/lottery';
import Logger from './util/logger';

const app = express();
const logger = new Logger([
    'error-file',
    'info-file',
    'exception-file'
]);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/lottery', Lottery);

// 404
app.use((req, res, next) => {
    res.status(404).send('Sorry Not Found Page');
});

//error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Sorry Error');
});
app.listen(3000, () => {
    console.log('start server...');
    logger.log('info', 'test logging', []);
});

export default app;
