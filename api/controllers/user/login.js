module.exports = {
    
    inputs: {
        userName: {
            type: 'string',
            required: true
        },
    },

    exits: {
        redirect: {
            responseType: 'redirect'
        }
    },
   
    fn: async function (inputs, exits) {

        var userRecord = await User.findOne({
            userName: inputs.userName.toLowerCase(),
        });

        
        if (!userRecord) {
            userRecord = await User.create(Object.assign({
                userName: inputs.userName.toLowerCase(),
            }, {}))
                .intercept('E_UNIQUE', 'userName')
                .fetch();
        }

        this.req.session.userName = userRecord.userName;

        throw { redirect: '/' };
        
    }
};




