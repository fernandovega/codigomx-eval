module.exports = {
    exits: {

        success: {
            allowInlineIncludes: true,
            viewTemplatePath: 'pages/index',
        }

    },
   
    fn: async function (inputs, exits) {

        var posts = await Post.find({
            sort: 'createdAt DESC'
        });

        return exits.success({
            posts: posts,
        });

    }
};