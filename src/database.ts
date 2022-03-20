import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/learnmongodb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('>>> Database connected');
  } catch {
    console.log("Error");
  }
}

export default connect;
