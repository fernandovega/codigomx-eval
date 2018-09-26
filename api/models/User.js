module.exports = {

    attributes: {
        userName: {
            type: 'string',
            required: true,
            unique: true,
            maxLength: 30,
        }
    }

};
