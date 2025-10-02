"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center space-y-6">
      <div className="flex flex-col items-center gap-4">
        <Frown className="h-16 w-16 text-muted-foreground" />
        <h1 className="text-3xl font-bold">404 – Page Not Found</h1>
        <p className="text-muted-foreground max-w-md">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
      </div>

      <div className="flex gap-4">
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </main>
  );
}
