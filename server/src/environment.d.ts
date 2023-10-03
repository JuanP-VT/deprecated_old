export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: String;
    }
  }
}
