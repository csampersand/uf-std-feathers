module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const majors = new Schema({
      majorName: { type: String, required: true },
      isAdmin: { type: Boolean, default: false }
    }, {
      timestamps: true
    });
  
    return mongooseClient.model('majors', majors);
  };