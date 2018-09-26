module.exports = async function (req, res, proceed) {

    if (req.session.userName) {
        return proceed();
    }

    return res.unauthorized();

};
