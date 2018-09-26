module.exports = {

    inputs: {
        id: {
            type: 'number',
            required: true
        },
    },

    exits: {
        unauthorized: {
            description: `El usuario no tiene permiso de eliminar este recurso`,
            responseType: 'unauthorized'
        }

    },

    fn: async function (inputs, exits) {

        var response = await Response.findOne({
            id: inputs.id
        });

        if (this.req.session.userName == response.userName){
            
            var post = await Post.findOne({
                id: response.postId
            });
            
            responseRecord = await Response.destroy({ id: inputs.id });

            var count = post.responsesCount - 1;
            await Post.update({ id: post.id })
                .set({ responsesCount: count });
                
            return exits.success();
        }
        else{
            throw 'unauthorized';
        }

    }
};




