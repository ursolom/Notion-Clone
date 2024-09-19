"use client";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { cn } from "@/lib/utils";
import useScroll from "@/hooks/useScroll";

const Navbar = () => {
  const scrolled = useScroll(100);

  return (
    <div
      className={cn(
        "flex items-center justify-between py-4 px-6 w-full bg-background dark:bg-[#121212] fixed top-0 z-50 transition-all duration-300",
        scrolled ? "shadow-sm border-b" : ""
      )}
    >
      <Logo />
      <div className="md:m-auto md:justify-end flex justify-between items-center md:w-fit w-full gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
