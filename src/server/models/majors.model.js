module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const majors = new Schema({
      majorName: { type: String, required: true }
    }, {
      timestamps: true
    });
  
    return mongooseClient.model('majors', majors);
  };