'use client'
import { useClerk,useUser } from '@clerk/nextjs';
import { Router,useRouter } from 'next/router';


export default function LogoutButton() {
  const {openSignIn} = useClerk()  // openSignIn() se user ko sign in kare ga, but for this app we are not using it.
    const { user } = useUser(); // `user` object se data milta hai
  const { signOut } = useClerk(); // Clerk se signOut method le rahe hain

  const handleLogout = async () => {
    // User ko logout karna'
    try {
      await signOut(); // User ko logout karna'

      alert('User successfully logged');
      // Redirect to sign-in page after logout
      Router.push('/signin') // This line will work only when you have a sign-in page in your app. For this app, we are not using it.

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
