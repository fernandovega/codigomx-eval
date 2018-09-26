module.exports = {
    attributes: {
        userName: { type: 'string', required: true },
        responseContent: { type: 'string', required: true },
        postId: { model: 'post' }
    },
};