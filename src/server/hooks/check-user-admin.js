// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return async context => {
        const { app, data } = context;

        // The authenticated user
        const user = context.params.user;


        // When generating dummy data through script allow the database to be cleared
        if(context.params.provider != undefined){
            const post = await app.service('posts').get(context.id);

            //Only admins can remove a post
            if(!(user.isAdmin || String(post.author._id) == String(user._id))){
                throw new Error('Must be admin to remove a post');
            }
        }
        // Best practice: hooks should always return the context
        return context;
    };
};
