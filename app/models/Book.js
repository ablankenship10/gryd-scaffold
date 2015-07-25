var schema = $G("DB").Schema({
  id: {type: String, unique: true},
  title: {type: String, required: true}
});

schema.set('versionKey', false);
schema.set('id', false);
module.exports = $G("DB").model("Book", schema);