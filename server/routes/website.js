const express = require('express');
const app = express();
const cors = require("cors");
// Use the cors middleware
app.use(cors());
const router = express.Router();
const {proposal} = require("../controller/proposal")
router.post("/proposal", proposal)
module.exports =router;