module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return async context => {
        const { id, data, app } = context;
        
        const post = await app.service('posts').get(id);

        var user = context.params.user; 
        const userComment = {
            comment: data.comment,
            postedBy: user._id
        }

        var currComments = post.comments;
        currComments.push(userComment);
        
        await app.service('posts').update({_id: id}, {$set: {comments: currComments}});

        // Best practice: hooks should always return the context
        return context;
    };
};