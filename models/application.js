const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
  status: {type:String, required:true},
  dateSubmitted: {type:String, required:true},
  jobTitle: {type:String, required:true},
  company: {type:String, required:true},
  location: {type:String, required:true},
  link: {type:String, required:true}
});

const Application = mongoose.model('Application', appSchema);

module.exports = Application;
