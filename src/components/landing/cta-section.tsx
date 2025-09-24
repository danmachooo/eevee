import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-[980px] text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter text-balance md:text-5xl">
          Ready to transform your learning?
        </h2>
        <p className="mx-auto mt-4 max-w-[750px] text-lg text-muted-foreground text-balance">
          Join thousands of students who are already using Eevee to enhance
          their studies and achieve better results with AI-powered insights.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="h-12 px-8">
            Get started for free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-8 bg-transparent"
          >
            Schedule a demo
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          No credit card required • Free tier available • Cancel anytime
        </p>
      </div>
    </section>
  );
}
