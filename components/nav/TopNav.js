"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function TopNav() {
  //hooks
  const { isSignedIn, user } = useUser();
  return (
    <nav className="flex justify-between items-center p-1 shadow ">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </Link>

      <div className="flex justify-end items-center gap-2">
        {isSignedIn && (<Link href="/dashborad">{user?.fullName}'s Dashboard</Link>)}

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <ModeToggle />
      </div>
    </nav>
  );
}
