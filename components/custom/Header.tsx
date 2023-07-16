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

const Header = () => {
  const [open, setOpen] = useState(false);

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
      <h1 className="text-2xl font-bold font-Montserrat">DevSynced</h1>
      <nav className="items-center hidden gap-4 md:flex">
        {routes.map((route) => (
          <CustomLink href={route.path} key={route.path}>
            {route.name}
          </CustomLink>
        ))}
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
}

const CustomLink = ({ href, children }: CustomLinkProps) => {
  return (
    <Link
      className="transition-all dark:hover:text-gray-300 hover:text-blue-400 font-Lato"
      href={href}
    >
      {children}
    </Link>
  );
};

export default Header;
