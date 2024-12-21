import React from 'react';
import '@/component/Styles/loading.css'
const LoadingPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}>
        <span style={styles.emoji}>⏳</span>
      </div>
      <h2 style={styles.text}>Loading, please wait...</h2>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid #ccc',
    borderTop: '5px solid #0070f3',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: '24px',
    animation: 'spinEmoji 1s linear infinite',
  },
  text: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#555',
  },
};

export default LoadingPage;
