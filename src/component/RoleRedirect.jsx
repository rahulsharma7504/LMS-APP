'use client';

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import LoadingPage from "./loading";

export default function RoleRedirect() {
  const { user } = useUser(); // Fetch the current user's data
  const router = useRouter(); // Access the router for navigation

  useEffect(() => {
    if (!user) return; // Wait until the user data is available

    const role = user?.publicMetadata?.role || "user"; // Default role

    // Role-based redirection
    if (role === "admin") {
      router.push("/admin"); // Redirect to the admin route
    } else {
      router.push("/user"); // Redirect to the user home route
    }
  }, [user, router]);

  // Display a loading state while processing
  return <LoadingPage/>
}