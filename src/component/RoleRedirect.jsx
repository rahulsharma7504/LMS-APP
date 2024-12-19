'use client';

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import LoadingPage from "./loading"; // LoadingPage for loading state
import UserLayout from "@/app/user/layout"; // Import UserLayout

export default function RoleRedirect() {
  const { user, isLoaded } = useUser(); // Fetch the current user's data and loading state
  const router = useRouter(); // Access the router for navigation

  useEffect(() => {

    // No user, so don't do anything
    if (!user) return;

    const role = user?.publicMetadata?.role || "user"; // Default role to "user"

    // Role-based redirection
    if (role === "teacher") {
      router.push("/teacher"); // Redirect to the teacher route
    }else{
      router.push('/user')
    }

    // Set loading state to false once redirection logic is executed
  }, [user, router]);


}
