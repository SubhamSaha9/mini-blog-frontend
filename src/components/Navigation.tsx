"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, PenTool, Settings } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold flex items-center gap-3">
            <PenTool className="h-8 w-8" />
            Mini Blog
          </Link>

          <div className="flex items-center space-x-2">
            <Link href="/">
              <Button
                variant={pathname === "/" ? "default" : "ghost"}
                size="sm"
                className="cursor-pointer"
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link href="/admin">
              <Button
                variant={pathname === "/admin" ? "default" : "ghost"}
                size="sm"
                className="cursor-pointer"
              >
                <Settings className="mr-2 h-4 w-4" />
                Admin
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
