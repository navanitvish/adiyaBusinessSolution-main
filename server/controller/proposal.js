const Proposal = require("../models/proposal");
const nodemailer = require("nodemailer");
require("dotenv").config();

//send  SingUp mail
function sendProposal(data) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });
  let mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to:  process.env.NODEMAILER_EMAIL,
    subject: `New Proposal from ${data.fName}`,
    text: `  A new Proposal recived from ${data.fName}  ${data.lName}, of company ${data.company} and website ${data.website}
        
        Project Details: 
            ${data.projectDetails}
        
        Quotes : 
            ${data.quotes}
        
        Calculated Quotes : 
            ${data.calcQuotes}


        Client Details 
        Name -  ${data.fName}  ${data.lName}
        Email -  ${data.email}
        Phone -  ${data.phone}
        Company -  ${data.Company}
        Website - ${data.website}
        `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return { error: error };
    } else {
      console.log("Email sent: " + info.response);
      return resp.json({ success: true, message: info.response });
    }
  });
}

exports.proposal = async (req, res) => {
  try {
    const Data = await Proposal.create(req.body);
    const mailRes = await sendProposal(Data);
    res.json({
      success: true,
      msg: "proposal created successfully",
      data: Data,
      mailRes,
    });
  } catch (err) {
    console.log(err)
    return res.json({
    
      success: false,
      msg: err.message,
    });
  }
};
