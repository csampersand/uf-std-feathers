// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return async context => {
        const { data } = context;

        // Throw an error if we didn't get a text
        if (!data.title) {
            throw new Error('A post must have a title');
        }
        if (!data.body) {
            throw new Error('A post must have a body');
        }

        // The authenticated user
        const user = context.params.user;
        // The post title
        const title = context.data.title;
        // The post body
        const body = context.data.body;

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            title,
            body,
            // Set the user id
            author: user._id,
            comments: []
        };

        // Best practice: hooks should always return the context
        return context;
    };
};
