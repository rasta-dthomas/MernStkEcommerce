// This is a basic express server.

require("dotenv").config();               /* Gives access to the value of
                                             PORT variable */
const express = require("express");
const connectDB = require('./config/db');

connectDB();

const app = express();                    /* Initialize express function in app 
                                             variable.*/
                                             

const PORT = process.env.PORT || 5000;    /* Create port variable. */

app.listen(PORT, () => console.log
(`Server running on port ${PORT}`));      /* Allows to listen on port variable
                                             that will be obtained from
                                             environment variables and displays
                                             confirmation message w/ port number. 
                                             */
