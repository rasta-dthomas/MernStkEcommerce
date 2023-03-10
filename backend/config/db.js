// The db.js file establishes the connection between the
// application and the database.

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

const connectDB = async () => {
      try {
            await mongoose.connect(process.env.MONGO_URI, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
            });
            
            console.log("MongoDB connection success");
      }catch (error) {
            console.error("MongoDB connection FAIL");
            process.exit(1);
      }
}

module.exports = connectDB;