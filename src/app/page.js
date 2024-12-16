'use client';

import { useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import LoadingPage from "../component/loading";
import RoleRedirect from "@/component/RoleRedirect";
import HomeLayout from "@/component/layout/HomeLayout";

export default function HomePage() {
  return(
    <>
    <RoleRedirect/>
    <HomeLayout/>
    </>
  )
}
