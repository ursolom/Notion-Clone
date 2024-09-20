"use client";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { cn } from "@/lib/utils";
import useScroll from "@/hooks/useScroll";
import { useConvexAuth } from "convex/react";
import Spinner from "@/components/spinner";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const scrolled = useScroll(20);
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={cn(
        "flex items-center justify-between py-4 px-6 w-full fixed top-0 z-50 transition-all duration-300",
        scrolled
          ? "shadow-md border-b border-gray-200 dark:border-gray-800 bg-background dark:bg-[#1f1f1f]"
          : ""
      )}
    >
      <Logo />
      <div className="flex items-center justify-end gap-4">
        {isLoading && <Spinner />}

        {!isAuthenticated && !isLoading && (
          <SignInButton>
            <Button className="hover:bg-primary-600 transition-colors">Login</Button>
          </SignInButton>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Link href="/decoments" className="text-primary-600 dark:text-primary-400">Enter Notion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}

        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
