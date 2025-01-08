'use client'; // Ensure client-side rendering for Clerk components

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-btn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <ClerkProvider>
      <nav className="p-4 bg-background/50 sticky top-0 backdrop:blur border-b z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <div className="text-lg font-bold">Amaan Blog</div>
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="hover:font-bold transition-all duration-200">
              Home
            </Link>
            <Link href="/blog" className="hover:font-bold transition-all duration-200">
              Blog
            </Link>
            <Link href="/about" className="hover:font-bold transition-all duration-200">
              About
            </Link>
            <Link href="/contact-us" className="hover:font-bold transition-all duration-200">
              Contact-Us
            </Link>
            <div className="flex items-center">
              <SignedOut>
                <SignInButton>
                  <Button className="mx-1 transition-all duration-300" variant="outline">
                    Login
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <ModeToggle />
            </div>
          </div>
          <div className="md:hidden">
            <span className="mx-2">
              <ModeToggle />
            </span>
            <Sheet>
              <SheetTrigger>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold my-4">Amaan Blogs</SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col gap-6">
                      <Link href="/">Home</Link>
                      <Link href="/blog">Blog</Link>
                      <Link href="/about">About</Link>
                      <Link href="/contact-us">Contact-Us</Link>
                      <div>
                        <SignedOut>
                          <SignInButton>
                            <Button className="mx-1 text-xs" variant="outline">
                              Login
                            </Button>
                          </SignInButton>
                        </SignedOut>
                        <SignedIn>
                          <UserButton />
                        </SignedIn>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </ClerkProvider>
  );
};

export default Navbar;
