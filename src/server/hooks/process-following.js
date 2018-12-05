module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return async context => {
        const { data } = context;

        var currFollowers =[];

        if(context.params.provider != undefined){
            currFollowers = context.params.user.following;
                    //FOR SOME REASON THE .includes WOULD NOT FUCKING WORK, DID IT THIS STUPID WAY INSTEAD
        for(var i = 0; i < currFollowers.length; i++){
            if(currFollowers[i] == data.following){
                throw new Error('You are already following this person');
            }
        }

        currFollowers.push(data.following);

        context.data.following = currFollowers;
        }

        // Best practice: hooks should always return the context
        return context;
    };
};
