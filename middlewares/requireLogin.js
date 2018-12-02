//next is function called after middle is complete
module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({error: 'You must logged in!'});
    }

    next();
};