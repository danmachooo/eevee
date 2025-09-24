import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, FileText, MessageSquare } from "lucide-react";

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center space-y-4 py-24 md:py-32">
      <div className="mx-auto max-w-[980px] text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter text-balance md:text-6xl lg:leading-[1.1]">
          The fastest and most powerful{" "}
          <span className="text-accent">AI knowledge hub</span> for students
        </h1>
        <p className="mx-auto mt-6 max-w-[750px] text-lg text-muted-foreground text-balance">
          Transform your study materials with AI. Upload documents, get instant
          summaries, and have intelligent conversations with your content.
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="h-12 px-8">
          Start learning
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="h-12 px-8 bg-transparent"
        >
          View demo
        </Button>
      </div>

      {/* Feature highlights */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
            <Upload className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-lg font-semibold">Upload Files</h3>
          <p className="text-sm text-muted-foreground">
            Support for PDFs, documents, and more
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
            <FileText className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-lg font-semibold">AI Summaries</h3>
          <p className="text-sm text-muted-foreground">
            Get instant, intelligent summaries of your content
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
            <MessageSquare className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-lg font-semibold">Chat with AI</h3>
          <p className="text-sm text-muted-foreground">
            Ask questions and get answers based on your files
          </p>
        </div>
      </div>
    </section>
  );
}
