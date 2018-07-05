const jwt = require('jsonwebtoken');
const secretKey = process.env.KEY || '{000-1-00232-111-931313-13142-12129-24-3333}'; 

module.exports = async (req, res, next) => {
    const x_app_token = req.headers['x-app-token'];

    if (!x_app_token)
        return next();
    
    try {
        const data = await jwt.verify(x_app_token, secretKey);
        req.userInfo = data;
        next();
    } catch (e) {
        res.status(401).send({
            code: 401,
            message: e  
        });
    }    
}