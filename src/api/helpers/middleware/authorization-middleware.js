const jwt = require('jsonwebtoken');
const secretKey = '{000-1-00232-111-931313-13142-12129-24-3333}';

module.exports = async (req, res, next) => {
    const authorization = req.headers['authorization'];
    
    if (!authorization)
        return res.status(401).send({ code: 401, message: 'Authorization is required' });
    
    const token = authorization.split(' ')[1];
    
    try {
        const data = await jwt.verify(token, secretKey);
        req.userAuthorization = data;
        next();
    } catch (e) {
        res.status(401).send({
            code: 401,
            message: e  
        });
    }    
}