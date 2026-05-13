// This folder handles talking to your backend or external APIs.

import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Register user function
export const registerUser = async (userData) => {
  try {
    console.log("Sending data:", userData);

    const response = await axios.post(
      `${API_URL}/register`,
      userData
    );

    console.log("Backend response:", response);

    return response.data;

// Error handling with detailed logging for debugging
  } catch (error) {

    console.log("FULL ERROR:", error);

    if (error.response) {
      // Backend responded with error status
      console.log("Response data:", error.response.data);
      console.log("Response status:", error.response.status);
      console.log("Response headers:", error.response.headers);

    } else if (error.request) {
      // Request sent but no response
      console.log("No response received:", error.request);

    } else {
      // Something else happened
      console.log("Axios setup error:", error.message);
    }

    throw error;
  }
};

// Function to log in a user by sending their credentials to the backend and handling the response.
export const loginUser = async (userData) => {
    try {
    console.log("Sending data:", userData);
    const response = await axios.post(
    `${API_URL}/login`,
    userData
  );
console.log("Backend response:", response);

    return response.data;

  } catch (error) {

    console.log("FULL ERROR:", error);

    if (error.response) {
      // Backend responded with error status
      console.log("Response data:", error.response.data);
      console.log("Response status:", error.response.status);
      console.log("Response headers:", error.response.headers);

    } else if (error.request) {
      // Request sent but no response
      console.log("No response received:", error.request);

    } else {
      // Something else happened
      console.log("Axios setup error:", error.message);
    }

    throw error;
  }
}
