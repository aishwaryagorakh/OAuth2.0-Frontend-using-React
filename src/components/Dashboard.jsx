import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [user, setUser] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Define an asynchronous function to fetch user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user-info',{withCredentials:true}); // Replace with your API endpoint
        setUser(response.data); // Update state with fetched data
      } catch (err) {
        setError(err.message); // Set error message if request fails
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures this runs once when component mounts

  if (loading) {
    return <p>Loading user data...</p>; // Display loading message while fetching
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message if there's an error
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default Dashboard;
