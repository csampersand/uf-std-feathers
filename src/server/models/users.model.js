// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({

    email: {type: String, unique: true, lowercase: true, required: true},
    password: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    gradYear: { type: Number, required: true },
    bio: { type: String },
    public: { type: Boolean, default: false },
    following: { type: [{ type: mongooseClient.Schema.Types.ObjectId, ref: 'Users'}], default: undefined },
    isAdmin: { type: Boolean, default: false }


  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
