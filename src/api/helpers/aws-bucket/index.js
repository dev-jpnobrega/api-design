const AWS = require('aws-sdk');


class AwsBucket {
    constructor() {
        AWS.config.loadFromPath('./api/helpers/aws-bucket/config.json');
        this.s3 = new AWS.S3({ apiVersion: '2006-03-01' });
        this.options = {
            Bucket: 'acn-gsp',             
            ResponseContentType: 'application/json'
        }
    }

    load(fileKey, callback) { 
        this.s3.getObject({ ...this.options, Key: fileKey }, (err, data) => {
            if (err)
                return callback(err, null);

            const json = JSON.parse(data.Body.toString('utf-8'));
            return callback(null,  json);
        });
    }
}

module.exports = AwsBucket;