import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <a className="flex items-center space-x-2" href="/">
          <div className="h-6 w-6 rounded bg-accent"></div>
          <span className="font-bold">Eevee</span>
        </a>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="relative h-8 justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
          >
            <Search className="mr-2 h-4 w-4" />
            Search...
          </Button>
          <Button variant="ghost" size="sm">
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}
