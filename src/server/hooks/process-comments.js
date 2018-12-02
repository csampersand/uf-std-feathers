module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return async context => {
        const { id, data, app } = context;

        const post = await app.service('posts').get(id);

        var user = context.params.user; 
        const userComment = {
            text: data.comment,
            postedBy: user._id
        }

        var currComments = post.comments;
        currComments.push(userComment);

        context.data.comments = currComments;
        
        // Best practice: hooks should always return the context
        return context;
    };
};