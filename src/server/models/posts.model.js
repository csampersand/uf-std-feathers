// posts-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.


module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const posts = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: mongooseClient.Schema.Types.ObjectId, ref: 'Users' },
    comments: [{ text: String, postedBy: { type: mongooseClient.Schema.Types.ObjectId, ref: 'Users' } }],
    flag:{type: Boolean, default: false}
  }, {
    timestamps: true
  });

  return mongooseClient.model('posts', posts);
};
