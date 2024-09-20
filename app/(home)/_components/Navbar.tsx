"use client";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { cn } from "@/lib/utils";
import useScroll from "@/hooks/useScroll";
import { useConvexAuth } from "convex/react";
import Spinner from "@/components/spinner";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Home, Link, LogIn, LogOut, LogOut } from "lucide-react";

const Navbar = () => {
  const scrolled = useScroll(20);
  const {isAuthenticated,isLoading} = useConvexAuth()
  return (
    <div
      className={cn(
        "flex items-center justify-between py-4 px-6 w-full  fixed top-0 z-50 transition-all duration-300 ",
        scrolled
          ? "shadow-md border-b border-gray-200 dark:border-gray-800 bg-background dark:bg-[#1f1f1f]"
          : ""
      )}
    >
      <Logo />
      <div className="flex items-center justify-end space-x-4">
        {isLoading && <Spinner />}

        {!isAuthenticated && !isLoading && (
            <SignInButton>  
            <Button>
              Login <LogIn className="w-4 h-4 ml-2" />
            </Button>
          </SignInButton>
        )}
        {isAuthenticated && !isLoading && (
          <SignOutButton>
            <Button variant="ghost" size="icon">  
              <Link href="/decoments">
                Enter Notion
              </Link>
            </Button>
            <UserButton afterSignOutUrl="/"/>
          </SignOutButton>
        )}

        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
