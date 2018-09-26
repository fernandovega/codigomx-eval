module.exports = {

    exits: {
        redirect: {
            responseType: 'redirect'
        }
    },

    fn: async function (inputs, exits) {

        delete this.req.session.userName;
        throw { redirect: '/' };
        
    }


};
