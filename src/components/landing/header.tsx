"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, LogOut } from "lucide-react";
import { useSession, signOut } from "../../../lib/auth-client";
import { usePathname } from "next/navigation";

export function Header() {
  const { data: session, isPending } = useSession();
  const pathname = usePathname();

  // Check if we're on auth pages
  const isAuthPage = pathname?.startsWith("/auth");
  const isSignInPage = pathname === "/auth/signin";
  const isSignUpPage = pathname === "/auth/signup";

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded bg-accent flex items-center justify-center overflow-hidden">
            <Image
              src="/eevee.png"
              alt="Eevee"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span className="font-bold">Eevee</span>
        </Link>

        <div className="flex items-center space-x-2">
          {/* Show search only when not on auth pages */}
          {!isAuthPage && (
            <Button
              variant="outline"
              className="relative h-8 justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
            >
              <Search className="mr-2 h-4 w-4" />
              Search...
            </Button>
          )}

          {/* Loading state */}
          {isPending && (
            <div className="h-8 w-16 animate-pulse bg-muted rounded" />
          )}

          {/* Authenticated user */}
          {!isPending && session?.user && (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Button>
            </>
          )}

          {/* Not authenticated - show appropriate auth buttons */}
          {!isPending && !session?.user && (
            <>
              {isSignUpPage ? (
                <>
                  <span className="text-sm text-muted-foreground">
                    Already have an account?
                  </span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/auth/signin">Log in</Link>
                  </Button>
                </>
              ) : isSignInPage ? (
                <>
                  <span className="text-sm text-muted-foreground">
                    Don't have an account?
                  </span>
                  <Button variant="default" size="sm" asChild>
                    <Link href="/auth/signup">Sign up</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/auth/signin">Log in</Link>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <Link href="/auth/signup">Sign up</Link>
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
