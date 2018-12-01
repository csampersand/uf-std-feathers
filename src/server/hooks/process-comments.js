module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return async context => {
        const { id, data } = context;
        
        var user = context.params.user; 
        const userComment = {
            comment: data.comment,
            postedBy: user.id
        }
        var currComments = context.data.comments;
        currComments.push(userComment);

        post = await app.service('posts').get(id, params);

        // Add comment to the post
        post.update = {
            comments: currComments,
        };

        // Best practice: hooks should always return the context
        return context;
    };
};