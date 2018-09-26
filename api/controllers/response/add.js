module.exports = {

    inputs: {
        responseContent: {
            type: 'string',
            required: true
        },
        postId: {
            type: 'number',
            required: true
        },
    },

    exits: {
        success: {
            viewTemplatePath: 'partials/response',
        }
    },

    fn: async function (inputs, exits) {
        
        var post = await Post.findOne({
            id: inputs.postId
        });

        responseRecord = await Response.create(Object.assign({
            responseContent: inputs.responseContent,
            postId: inputs.postId,
            userName: this.req.session.userName
        }, {})).fetch();

        var count = post.responsesCount + 1;
        await Post.update({ id: inputs.postId })
            .set({ responsesCount: count });

        return exits.success({
            response:  responseRecord
        });

    }
};
