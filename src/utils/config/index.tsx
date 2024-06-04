// import dotenv from "dotenv";

// dotenv.config();
const config = {
  basicAuthUsername: process.env.REACT_APP_API_USERNAME || "",
  basicAuthPassword: process.env.REACT_APP_API_PASSWORD || "",
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "",
};

export default config;
