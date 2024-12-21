'use client'
import { useClerk, useUser } from '@clerk/nextjs';
import { Router, useRouter } from 'next/router';
import { ListGroup } from 'react-bootstrap';
import LoadingPage from './loading';
import { FaNodeJs, FaSignOutAlt } from 'react-icons/fa';


export default function LogoutButton() {
  const { openSignIn } = useClerk()  // openSignIn() se user ko sign in kare ga, but for this app we are not using it.
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
    <>
      <ListGroup.Item>
        <a href="#" onClick={handleLogout}>
          <FaSignOutAlt className="me-2" /> Logout
        </a>
      </ListGroup.Item>


    </>
  );
}

