import app from "../src/app.js";
import mongoose from "mongoose";
import connectDB from "../src/config/db.js";

// Set test environment
process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test-secret-key";

// Connect to test database before all tests
beforeAll(async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log("Database connection skipped for test setup");
  }
});

// Close mongoose connection after all tests
afterAll(async () => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.log("Database close skipped");
  }
});

export default app;
