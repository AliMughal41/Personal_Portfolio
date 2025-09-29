// server.js
import dotenv from "dotenv";
import app from "./app.js";

// Load environment variables first
dotenv.config();



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
