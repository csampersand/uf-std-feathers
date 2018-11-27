// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return async context => {
        const { data } = context;

        // Throw an error if we didn't get a title
        /*if (!context.data.isAdmin) {
            throw new Error('Must be admin to add new major');
        }

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            majorName: data.majorName
        };*/

        // Best practice: hooks should always return the context
        return context;
    };
};
