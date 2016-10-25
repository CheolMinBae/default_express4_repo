import winston from 'winston';

export default class Logger {

    constructor(filenameList) {
        this.filenames = filenameList;
        this.initLogger();
    }

    initLogger() {
        const self = this;
        this.logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({
                    name: 'consoleLog',
                    colorize: true,
                    timestamp: function() {return self.getDateString();},
                    json: false
                }),
                new (winston.transports.File)({
                    name: this.filenames[0],
                    filename: this.filenames[0] + '.log',
                    level: 'error',
                    maxsize: 1000000,
                    maxFiles: 5,
                    timestamp: function() {return self.getDateString();},
                    json: false
                }),
                new (winston.transports.File)({
                    name: this.filenames[1],
                    filename: this.filenames[1] + '.log',
                    level: 'info',
                    maxsize: 1000000,
                    maxFiles: 5,
                    timestamp: function() {return self.getDateString();},
                    json: false
                })
            ],
            exceptionHandlers: [
                new (winston.transports.File)({
                    name: this.filenames[2],
                    filename: this.filenames[2] + '.log',
                    maxsize: 1000000,
                    maxFiles: 5,
                    timestamp: function() {return self.getDateString();},
                    json: false
                })
            ]
        });
    }
    // Logger.log('info', 'aaaa', ['{a:"b"}']);
    log(type, string, params) {
        this.logger.log(type, string, params.join());
    }

    getDateString() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1) / 10 >= 1 ? currentDate.getMonth() + 1 : '0' + currentDate.getMonth();
        const date = currentDate.getDate();
        const hour = currentDate.getHours();
        const minute = currentDate.getMinutes();
        const second = currentDate.getSeconds();

        return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
    }
}
