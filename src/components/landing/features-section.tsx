import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Shield, Users } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-[980px] text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Flagship Features
        </h2>
        <p className="mx-auto mt-4 max-w-[750px] text-lg text-muted-foreground">
          Powerful AI capabilities designed specifically for students and
          researchers.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <Card className="relative overflow-hidden">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-accent" />
              <CardTitle>Smart Summarization</CardTitle>
            </div>
            <CardDescription>
              Advanced AI models extract key insights from your documents with
              precision and context awareness.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">✓ Multi-format support</Badge>
              <Badge variant="secondary">✓ Context-aware analysis</Badge>
              <Badge variant="secondary">✓ Key concept extraction</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-accent" />
              <CardTitle>Lightning Fast</CardTitle>
            </div>
            <CardDescription>
              Process documents and get responses in seconds, not minutes.
              Optimized for speed and efficiency.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">✓ Instant processing</Badge>
              <Badge variant="secondary">✓ Real-time responses</Badge>
              <Badge variant="secondary">✓ Optimized performance</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-accent" />
              <CardTitle>Secure & Private</CardTitle>
            </div>
            <CardDescription>
              Your documents and data are encrypted and protected. We prioritize
              your privacy and security.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">✓ End-to-end encryption</Badge>
              <Badge variant="secondary">✓ Private processing</Badge>
              <Badge variant="secondary">✓ GDPR compliant</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-accent" />
              <CardTitle>Collaborative Learning</CardTitle>
            </div>
            <CardDescription>
              Share insights, collaborate on documents, and learn together with
              your study groups.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">✓ Team workspaces</Badge>
              <Badge variant="secondary">✓ Shared annotations</Badge>
              <Badge variant="secondary">✓ Group discussions</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
