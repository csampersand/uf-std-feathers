module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return async context => {
        const { data } = context;

        // Throw an error if user not an admin
        if(context.params.provider != undefined){
            if (!context.params.user.isAdmin) {
                throw new Error('Must be admin to add new major');
            }
        }

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            majorName: data.majorName
        };

        // Best practice: hooks should always return the context
        return context;
    };
};
