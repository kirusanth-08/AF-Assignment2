import axios from 'axios';

export const authMiddleware = async () => {
  try {
    // Check if JWT token is present in local storage
    const token = localStorage.getItem('token');
    console.log(token)
    if (!token) {
      return false; // No token found
    }

    // Send request to authentication endpoint with token in the Authorization header
    const response = await axios.post('http://localhost:3000/users/authenticate', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // Check authentication status
    if (response && response.data && response.data.authenticated) {
      return true; // Token is authenticated
    } else {
      return false; // Invalid token or user is not authenticated
    }
  } catch (error) {
    console.error('Authentication failed:', error);
    return false; // Error occurred during authentication
  }
};

export const logout = async () => {
  try {
    // Clear token from local storage
    localStorage.removeItem('token');

    // Redirect the user to the home page or perform any other post-logout actions
    window.location.href = '/';
  } catch (error) {
    console.error('Logout failed:', error);
    // Handle logout failure if needed
  }
};
