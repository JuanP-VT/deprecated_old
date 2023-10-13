// This module is empty and is used to indicate that this is a module file.
export {};
// Declare global types for Node.js environment variables
declare global {
  // Extend the NodeJS namespace to include a ProcessEnv interface
  namespace NodeJS {
    // The ProcessEnv interface defines the types for environment variables
    interface ProcessEnv {
      // port for database connections
      DB_PORT: string;
      // URL for connecting to MongoDB
      MONGODB_CONNECTION_STRING: string;
    }
  }
}
