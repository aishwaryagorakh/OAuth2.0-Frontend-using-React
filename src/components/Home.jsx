// App.js
import React from 'react';

function Home() {

    const googleLogin=()=>{
     window.location.href = 'http://localhost:8080/oauth2/authorization/google'
    };

    const githubLogin=()=>{
      window.location.href = 'http://localhost:8080/oauth2/authorization/github'
    };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to OAuth 2.0 Demo</h1>
      <button style={styles.googleButton} onClick={googleLogin}>Login With Google</button>
      <button style={styles.githubButton} onClick={githubLogin}>Login With Github</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  welcomeButton: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  googleButton: {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#4285F4',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
  githubButton: {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: 'grey',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Home;
