module.exports = {
    inputs: {
        postId: {
            type: 'number',
            required: true
        },
    },

    exits: {
        success: {
            viewTemplatePath: 'partials/response_list',
        }
    },

    fn: async function (inputs, exits) {

        var responses = await Response.find({
            where: { postId: inputs.postId },
            sort: 'createdAt DESC'
        });

        return exits.success({
            responses: responses,
        });

    }
};