const express = require('express');
const app = express();
const cors = require("cors");

// Use the cors middleware
app.use(cors());
const router = express.Router();
const{textQuery} = require ('../controller/chatbot.js')


router.post('/bot-query',textQuery)

module.exports = router;