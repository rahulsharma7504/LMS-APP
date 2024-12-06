'use client'
import { SignIn, useClerk } from '@clerk/nextjs'
export default function Page() {
  const { openSignIn } = useClerk()
  const handleCustomFlow = () => {
    try {
    openSignIn(); // Open the sign-in modal
      
    } catch (error) {
      alert(error.message)
    }
  };
  return(
    <>
    {/* <center><SignIn /></center> */}
    <button onClick={handleCustomFlow}>Sign In with Clerk</button>

    </>
  ) 
}