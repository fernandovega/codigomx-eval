module.exports = {

    inputs: {
        id: {
            type: 'number',
            required: true
        },
    },

    exits: {
        redirect: {
            responseType: 'redirect'
        }
    },
    

    fn: async function (inputs, exits) {

        var post = await Post.findOne({
            id: inputs.id 
        });

        if (this.req.session.userName == post.userName) {
            postRecord = await Post.destroy({ id: inputs.id });
            responseRecord = await Response.destroy({ postId: inputs.id });
        }
       
        throw { redirect: '/' };

    }
};




