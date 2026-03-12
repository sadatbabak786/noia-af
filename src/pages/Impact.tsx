import { motion } from "framer-motion";
import { TrendingUp, Users, MapPin, Briefcase, ArrowRight, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";

const impactStats = [
  { icon: Users, value: "50,835+", label: "Direct Beneficiaries" },
  { icon: MapPin, value: "8", label: "Provinces Covered" },
  { icon: Heart, value: "62%", label: "Women & Girls Served" },
  { icon: TrendingUp, value: "7", label: "Years of Impact" },
];

const regionalImpact = [
  { region: "Kabul", years: "2018 - Present", beneficiaries: "12,000", percentage: "23.6%" },
  { region: "Farah", years: "2023 - Present", beneficiaries: "9,835", percentage: "19.4%" },
  { region: "Nangarhar", years: "2019 - 2021", beneficiaries: "8,500", percentage: "16.7%" },
  { region: "Kunar", years: "2020 - 2022", beneficiaries: "6,800", percentage: "13.4%" },
  { region: "Laghman", years: "2021 - 2023", beneficiaries: "5,200", percentage: "10.2%" },
  { region: "Kapisa", years: "2018 - 2019", beneficiaries: "4,500", percentage: "8.9%" },
  { region: "Parwan", years: "2018 - 2020", beneficiaries: "4,000", percentage: "7.9%" },
];

const caseStudies = [
  {
    title: "Women-Led Crisis Response in Nangarhar",
    before: "Women had no participation in crisis management or decision-making. Disaster response lacked gender-sensitivity.",
    after: "50+ women trained in leadership and disaster response. Women-Led Crisis Response Network established across multiple villages.",
    outcome: "70% of aid reached women and children. Response times reduced by 40%. Network expanded to 3 additional villages by end of 2024."
  },
  {
    title: "Women's Economic Empowerment in Herat",
    before: "Women had limited economic opportunities. Most families relied on single male income with no financial literacy.",
    after: "Skills development and financial literacy programs enabled women to pursue economic independence and entrepreneurship.",
    outcome: "40% increase in women assuming leadership roles. 30% rise in economic independence. Women now lead community governance."
  },
  {
    title: "Reforestation in Paktia Province",
    before: "Widespread deforestation, soil erosion, and poor air quality. Community members lacked environmental awareness.",
    after: "40,000 trees planted. 50 community members employed. Educational workshops conducted on sustainable forestry.",
    outcome: "30 participants continue active tree care. Increased local resilience to climate change and long-term environmental stewardship."
  },
];

const stories = [
  { name: "Amina, 32", location: "Nangarhar", story: "Initially hesitant due to societal stigma, my confidence grew through NOIA's training. When floods struck, I coordinated relief efforts, mobilizing women to establish temporary shelters and distribute supplies. Under our leadership, 70% of aid reached women and children." },
  { name: "Shabana, 15", location: "Parwan", story: "I faced early marriage at 14, but NOIA's advocacy reached my parents. Through Community Learning Circles, I found a safe space to explore my potential. I'm now continuing my education and dreaming of a different future." },
  { name: "Nabi Jan", location: "Paktia", story: "These trees not only brought shade and cleaner air, but they also gave me a job and hope for my children's future. The reforestation project changed our community." },
];

const Impact = () => {
  return (
    <Layout>
      <PageHero
        title="Our Impact"
        subtitle="Measurable results and lasting change across Afghanistan since 2018."
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

      {/* Regional Impact Table */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">Beneficiaries by Region</h2>
          <div className="rounded-xl bg-card shadow-md border border-border/30 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/5 border-b border-border">
                  <th className="text-left p-4 font-heading font-bold text-foreground text-sm">Region</th>
                  <th className="text-left p-4 font-heading font-bold text-foreground text-sm">Years</th>
                  <th className="text-right p-4 font-heading font-bold text-foreground text-sm">Beneficiaries</th>
                  <th className="text-right p-4 font-heading font-bold text-foreground text-sm">% of Total</th>
                </tr>
              </thead>
              <tbody>
                {regionalImpact.map((r) => (
                  <tr key={r.region} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium text-foreground text-sm">{r.region}</td>
                    <td className="p-4 text-muted-foreground text-sm">{r.years}</td>
                    <td className="p-4 text-right font-semibold text-primary text-sm">{r.beneficiaries}</td>
                    <td className="p-4 text-right text-muted-foreground text-sm">{r.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            73.3% of total beneficiaries are in rural areas, with 26.7% in urban centers (Kabul and Farah).
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
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
      <section className="section-padding section-alt">
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
