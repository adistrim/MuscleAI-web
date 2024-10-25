import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ShieldCheck, Brain, Activity, ArrowRight, Sparkles, Trophy } from "lucide-react";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - More appropriate for launch */}
      <section className="container py-24 mx-auto text-center">
        <div className="space-y-4">
          <Badge variant="outline" className="px-4 py-1 mb-4">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
            Now in Beta - Try it Free
          </Badge>
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl">
            Your Form Could Be{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Hurting You
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Get instant, AI-powered feedback on your exercise form. No account needed, completely free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href={process.env.NEXT_PUBLIC_APP_URL || "/"}>
              <Button size="lg" className="group">
                Try It Now - It&apos;s Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_APP_URL || "/"}>
              <Button size="lg" variant="outline">See How It Works</Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">No registration required • Works on any device with a camera</p>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Why We Built Aligno</h2>
                <p className="text-lg text-muted-foreground">
                  Exercise should make you stronger, not hurt you. But without proper guidance, you&apos;re working out in the dark.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Trainer Gap</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      In India, there&apos;s only 1 certified trainer per 100,000 people. That means most of us are exercising without proper guidance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Risk is Real</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      73% of workout injuries come from improper form. That&apos;s why we built an AI that spots what you can&apos;t see.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30" />
              <img
                src="/api/placeholder/500/400"
                alt="AI Analysis Demo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-1">The Aligno Way</Badge>
          <h2 className="text-4xl font-bold">Your Journey to Perfect Form</h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Transform your workout experience with AI that watches every rep like a personal trainer would.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-4 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <Brain className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Smart Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              Our AI watches your form with the precision of an expert trainer, catching details the human eye might miss.
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-4 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <Activity className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Instant Feedback</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              Get real-time voice cues and visual guides to correct your form, just like having a trainer by your side.
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-shadow relative">
            <div className="absolute top-4 right-4">
              <Badge variant="outline" className="bg-primary/5">Coming Soon</Badge>
            </div>
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-4 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <Trophy className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Progress Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              Watch your form improve over time with detailed analytics and milestone celebrations.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container text-center space-y-6">
          <Badge variant="secondary" className="px-4 py-1">Early Access</Badge>
          <h2 className="text-4xl font-bold">Be One of the First to Try Aligno</h2>
          <p className="text-xl max-w-[600px] mx-auto opacity-90">
            Help shape the future of accessible fitness guidance. Try our beta version today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href={process.env.NEXT_PUBLIC_APP_URL || "/"}>
              <Button size="lg" variant="secondary" className="group">
                Try It Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <p className="text-sm opacity-75">No registration • No installation • Works in your browser</p>
        </div>
      </section>
    </div>
  );
}
