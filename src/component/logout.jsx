'use client'
import { useClerk,useUser } from '@clerk/nextjs';
import { Router } from 'next/router';


export default function LogoutButton() {
    const { user } = useUser(); // `user` object se data milta hai
  const { signOut } = useClerk(); // Clerk se signOut method le rahe hain

  const handleLogout = async () => {
    try {
      await signOut(); // User ko logout karna'
      Router.push('/sign-up')
      alert('User successfully logged');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <button onClick={handleLogout} style={styles.button}>
      Logout
    </button>
  );
}

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: 'White',
    fontFamily: 'Geist Sans, sans-serif',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '14px',
    lineHeight: '1.5',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
