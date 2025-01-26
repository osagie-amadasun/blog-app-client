export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;
    try {
      // Decode the token to check expiration
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 > Date.now(); // Check if token is expired
    } catch (err) {
      return false;
    }
  };
