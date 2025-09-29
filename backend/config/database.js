import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "PORTFOLIO",
    })
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((error) => {
      console.error("Database connection error:", error);
    });
};
