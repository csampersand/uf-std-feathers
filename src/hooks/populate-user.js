// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
    return async context => {
        const { app, method, result, params } = context;

        // Make sure that we always have a list of posts either by wrapping
        // a single post into an array or by getting the `data` from the `find` method's result
        const posts = method === 'find' ? result.data : [ result ];

        // Asynchronously get user object from each post's `author`
        // and add it to the post
        await Promise.all(posts.map(async post => {
            // Also pass the original `params` to the service call
            // so that it has the same information available (e.g. who is requesting it)
            post.author = await app.service('users').get(post.author, params);
        }));

        return context;
    };
};
