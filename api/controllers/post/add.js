module.exports = {
    
    inputs: {
        postContent: {
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

        postRecord = await Post.create(Object.assign({
            postContent: inputs.postContent,
            userName: this.req.session.userName
        }, {})).fetch();
            
        throw { redirect: '/' };
        
    }
};




