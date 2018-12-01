// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return async context => {
        const { data } = context;

        // The authenticated user
        const user = data;
        var adminBool;

        if(context.params.provider == undefined){
            adminBool = user.isAdmin;
        }
        else{
            adminBool = false;
        }

        const publicAttr = user.public; //can't use the keyword public
        const email = user.email;
        const fname = user.fname;
        const lname = user.lname;
        const gradYear = user.gradYear;
        const bio = user.bio;
        const password = user.password;

        // Override the user data (so that people can't become admin)
        context.data = {
            email,
            fname,
            lname,
            gradYear,
            bio,
            public: publicAttr,
            isAdmin: adminBool,
            password
            };

        // Best practice: hooks should always return the context
        return context;
    };
};
