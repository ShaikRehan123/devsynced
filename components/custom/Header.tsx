"use client";

import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { routes } from "@/constants";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSession } from "next-auth/react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between w-full h-20 px-4 shadow-md dark:shadow-gray-900 bg-inherit">
      <Link
        className="text-2xl font-bold font-SpaceGrotesk cursor-pointer"
        href="/"
      >
        DevSynced
      </Link>
      <nav className="items-center hidden gap-4 md:flex">
        {routes.map((route) => (
          <CustomLink href={route.path} key={route.path}>
            {route.name}
          </CustomLink>
        ))}
        {session !== undefined && session !== null && (
          <Button asChild>
            <Link href="/dashboard" className="font-SpaceGrotesk">
              Dashboard
            </Link>
          </Button>
        )}

        {session !== undefined && session === null && (
          <Button asChild>
            <Link href="/api/auth/signin" className="font-SpaceGrotesk">
              Sign In
            </Link>
          </Button>
        )}

        <ThemeToggle />
      </nav>

      <div className="flex items-center gap-2 md:hidden">
        <Button variant="outline" onClick={() => setOpen(true)}>
          <Menu size={24} />
        </Button>
        <ThemeToggle />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search routes" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {routes.map((route) => (
            <CommandItem key={route.path}>{route.name}</CommandItem>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  );
};

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CustomLink = ({ href, children, className }: CustomLinkProps) => {
  return (
    <Link
      className={`transition-all dark:hover:text-gray-300 hover:text-blue-400 font-Lato ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Header;
