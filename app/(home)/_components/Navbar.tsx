"use client";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { cn } from "@/lib/utils";
import useScroll from "@/hooks/useScroll";

const Navbar = () => {
  const scrolled = useScroll(20);

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
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
