const jwt = require('jsonwebtoken');
const _secretKey = '{000-1-00232-111-931313-13142-12129-24-3333}'; 

class Signature {
    static sign(payload, expiresIn = '1d') { 
        return { 
            token: jwt.sign(payload, _secretKey, { expiresIn }),
            expiresIn
        }
    }
}

module.exports = Signature;