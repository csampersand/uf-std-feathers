// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
    return async context => {
        const { app, method, result, params } = context;

        //Gets all users within the schema
        const users = method === 'find' ? result.data : [ result ];

        // Set the user's major based on the id within the majors table
        await Promise.all(users.map(async user => {
            // Also pass the original `params` to the service call
            // so that it has the same information available (e.g. who is requesting it)
            user.major = await app.service('majors').get(user.major, params);
        }));

        return context;
    };
};
