// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return async context => {
        const { id, app, data, method } = context;

        // Throw an error if we didn't get a title
        if (!data.title) {
            throw new Error('Post must have a title');
        }
        // Throw an error if we didn't get a body
        if (!data.body) {
            throw new Error('Post must have a body');
        }

        // The authenticated user
        const user = context.params.user;
        // The post title
        const title = context.data.title;
        // The post body
        const body = context.data.body;
        var _id;
        var comments = [];

        // When generating dummy data through script give allow the script to give the user id
        if(context.params.provider == undefined){
            _id = context.data.author;
            comments = data.comments;
        }
        // In all other cases the user id will be the one in the browser session
        else{
            _id = user._id;
        }

        if (method === 'update') {
            const post = await app.service('posts').get(id);

            comments = post.comments;
        }
        else if (method === 'create' && context.params.provider != undefined){
            comments = []
        }

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            title,
            body,
            // Set the user id
            author: _id,
            comments
        };

        // Best practice: hooks should always return the context
        return context;
    };
};
