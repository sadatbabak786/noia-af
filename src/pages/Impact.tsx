import { motion } from "framer-motion";
import { TrendingUp, Users, MapPin, Briefcase, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";

const impactStats = [
  { icon: Users, value: "150,000+", label: "Direct Beneficiaries" },
  { icon: MapPin, value: "18", label: "Provinces Covered" },
  { icon: Briefcase, value: "85+", label: "Projects Completed" },
  { icon: TrendingUp, value: "14", label: "Years of Impact" },
];

const caseStudies = [
  {
    title: "Transforming Education in Bamyan",
    before: "Only 30% of girls in the district had access to education. Schools lacked trained teachers and materials.",
    after: "Girl enrollment increased to 78%. 50 new community-based schools established with trained local teachers.",
    outcome: "3,000+ girls now attending school regularly with improved learning outcomes."
  },
  {
    title: "Clean Water for Dasht-e-Barchi",
    before: "Community relied on contaminated water sources. Waterborne diseases were common, especially among children.",
    after: "15 deep wells and 3 water treatment systems installed. Community water management committees established.",
    outcome: "Waterborne disease reduced by 65%. 8,000+ people now have access to clean drinking water."
  },
  {
    title: "Women's Economic Empowerment in Herat",
    before: "Women had limited economic opportunities. Most families relied on single male income.",
    after: "500+ women trained in vocational skills. 120 micro-enterprises launched with seed funding support.",
    outcome: "Average household income increased by 40%. Women report greater decision-making power."
  },
];

const stories = [
  { name: "Zahra, 14", location: "Bamyan", story: "I was the first girl in my family to attend school thanks to NOIA's program. Now I dream of becoming a doctor to help my community. My younger sisters are following my path." },
  { name: "Ahmad, 45", location: "Herat", story: "After the earthquake destroyed our home, NOIA was the first to respond. They provided us with shelter, food, and helped us rebuild. We are forever grateful." },
  { name: "Nasreen, 30", location: "Kabul", story: "The tailoring training changed my life. I now earn enough to support my three children and even employ two other women from my neighborhood." },
];

const Impact = () => {
  return (
    <Layout>
      <PageHero
        title="Our Impact"
        subtitle="Measurable results and lasting change across Afghanistan."
      />

      {/* Stats */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="stat-card"
              >
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-secondary" />
                <div className="text-3xl font-heading font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">Case Studies</h2>
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-card p-8 shadow-md border border-border/30"
              >
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">{cs.title}</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="rounded-lg bg-destructive/5 p-4">
                    <h4 className="font-semibold text-sm text-destructive mb-2">Before</h4>
                    <p className="text-sm text-muted-foreground">{cs.before}</p>
                  </div>
                  <div className="rounded-lg bg-secondary/10 p-4">
                    <h4 className="font-semibold text-sm text-secondary mb-2">After</h4>
                    <p className="text-sm text-muted-foreground">{cs.after}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 mt-4">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm font-medium text-foreground">{cs.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">Beneficiary Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-card p-6 shadow-sm border border-border/30"
              >
                <div className="mb-4">
                  <h4 className="font-heading font-bold text-foreground">{s.name}</h4>
                  <p className="text-xs text-muted-foreground">{s.location}</p>
                </div>
                <p className="text-sm text-muted-foreground italic">"{s.story}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
