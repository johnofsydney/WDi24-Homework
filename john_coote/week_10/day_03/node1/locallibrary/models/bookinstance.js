var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookInstanceSchema = new Schema(
  {
    book: {type: Schema.ObjectId, ref: 'Book'}, // Array means Many to Many
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Loaned', 'Reserved'], default: 'Available'},
    due_back: {type: Date, default: Date.now}
  }
);


BookInstanceSchema.virtual('url').get(function () {
  return '/catalog/bookinstance/' + this._id;
})

module.exports = mongoose.model('BookInstance', BookInstanceSchema);
