import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Shield, CheckCircle, Users, BookOpen, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";

const amounts = [25, 50, 100, 250, 500, 1000];

const impactItems = [
  { amount: "$25", impact: "Provides school supplies for 5 children for a year", icon: BookOpen },
  { amount: "$50", impact: "Funds clean water access for a family for 6 months", icon: Droplets },
  { amount: "$100", impact: "Supports a woman's vocational training course", icon: Users },
  { amount: "$250", impact: "Equips a community-based classroom", icon: BookOpen },
  { amount: "$500", impact: "Provides emergency relief for 10 families", icon: Heart },
  { amount: "$1,000", impact: "Funds a teacher's salary for 3 months", icon: Users },
];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");

  return (
    <Layout>
      <PageHero
        title="Make a Donation"
        subtitle="Your generosity helps us create lasting change in Afghan communities."
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Donation Form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl bg-card p-8 shadow-lg border border-border/30">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Secure Donation</span>
                </div>

                {/* Frequency */}
                <div className="flex gap-2 mb-6">
                  {(["one-time", "monthly"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f)}
                      className={`flex-1 rounded-lg py-3 text-sm font-semibold capitalize transition-colors ${
                        frequency === f
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {f.replace("-", " ")}
                    </button>
                  ))}
                </div>

                {/* Amount grid */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => setSelectedAmount(a)}
                      className={`rounded-lg py-3 text-lg font-bold transition-colors ${
                        selectedAmount === a
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      ${a}
                    </button>
                  ))}
                </div>

                <Input
                  type="number"
                  placeholder="Or enter custom amount"
                  className="mb-6"
                  onChange={(e) => setSelectedAmount(Number(e.target.value) || null)}
                />

                {/* Form fields */}
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                </div>

                <Button className="w-full cta-gradient border-0 text-primary-foreground font-semibold text-lg py-6 gap-2">
                  <Heart className="h-5 w-5" />
                  Donate {selectedAmount ? `$${selectedAmount}` : ""} {frequency === "monthly" ? "Monthly" : ""}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Your donation is tax-deductible. You will receive a receipt via email.
                </p>
              </div>
            </div>

            {/* Impact sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-xl bg-trust-blue p-6 border border-border/30">
                <h3 className="font-heading font-bold text-foreground mb-4">Your Impact</h3>
                <div className="space-y-4">
                  {impactItems.map((item) => (
                    <div key={item.amount} className="flex items-start gap-3">
                      <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-foreground">{item.amount}</span>
                        <p className="text-xs text-muted-foreground">{item.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-card p-6 shadow-sm border border-border/30">
                <h4 className="font-heading font-bold text-foreground mb-3">Transparency Promise</h4>
                <div className="space-y-2">
                  {["85% goes directly to programs", "Annual independent audits", "Public financial reports", "Donor acknowledgment"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
