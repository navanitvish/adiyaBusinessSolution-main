const mongoose = require('mongoose');
const { Schema } = mongoose;

const proposalSchema = new Schema({
  fName: { type: String },
  lName: { type: String },
  email: { type: String },
  phone: { type: String },
  company: { type: String },
  website: { type: String },
  projectDetails: { type: String },
  quotes: [{
    type : String,
  }],
  calcQuotes: [{
    "Number of pages": { type: String },
    "Style of design": { type: String },
    "Copywriting no. of pages": { type: String },
    "SEO placement guarantee": { type: String },
    "Responsive design": { type: String },
    "Database integration": { type: String },
    "E-Commerce functionality": { type: String },
    "CMS": { type: String }
  }]
});

const ProposalModel = mongoose.model('proposal', proposalSchema);
module.exports = ProposalModel;
