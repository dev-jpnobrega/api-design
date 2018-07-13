const jwt = require('jsonwebtoken');
const secretKey = process.env.KEY || '{000-1-00232-111-931313-13142-12129-24-3333}';

const loginController = (req, res) => {
    const { body } = req;
    const expiresIn = '2d';
    const signToken = jwt.sign(body, secretKey, { expiresIn });

    return res.status(200).send({ 'Authorization': `Bearer ${signToken}`, expiresIn });
};

module.exports = {
    loginController: loginController
};

// Exemplo puxar arquivo do bucket
/*
const s3 = new AwsBucket();
    s3.load(`gsp/products/${ searchText }.json`, (err, data) => {
        if (err)
            return res.status(204).send({ message: err.message });

        return res.status(200).send({ data });
    }); 
*/