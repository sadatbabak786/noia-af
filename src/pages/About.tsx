import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Shield, BookOpen, Award, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import aboutHero from "@/assets/about-hero.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  { icon: Heart, title: "Compassion", desc: "We approach our work with empathy and genuine care for every individual we serve." },
  { icon: Shield, title: "Integrity", desc: "We uphold the highest standards of transparency, accountability, and ethical conduct." },
  { icon: Users, title: "Community-Led", desc: "We believe communities themselves hold the solutions to their challenges." },
  { icon: Globe, title: "Inclusivity", desc: "We serve all people regardless of ethnicity, gender, or background." },
  { icon: Award, title: "Excellence", desc: "We strive for the highest quality in all our programs and operations." },
  { icon: BookOpen, title: "Innovation", desc: "We continuously seek creative, evidence-based approaches to development." },
];

const leaders = [
  { name: "Dr. Ahmad Rahimi", role: "Executive Director", bio: "20+ years in humanitarian leadership across Central Asia." },
  { name: "Fatima Noori", role: "Deputy Director", bio: "Expert in community development and women's empowerment programs." },
  { name: "Mohammad Karimi", role: "Head of Programs", bio: "Former UN advisor with extensive field experience." },
  { name: "Sara Ahmadi", role: "Finance Director", bio: "Certified accountant with specialization in NGO financial management." },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About NOIA"
        subtitle="Dedicated to sustainable development and empowering Afghan communities since 2010."
        image={aboutHero}
      />

      {/* Overview */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                The National Organization of Initiative & Action (NOIA) was established in 2010 by a
                group of dedicated Afghan professionals committed to creating positive change in their
                communities. What began as a small grassroots initiative has grown into one of
                Afghanistan's most respected non-governmental organizations.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the past 14 years, NOIA has implemented over 85 projects across 18 provinces,
                directly benefiting more than 150,000 individuals. Our work spans education, community
                development, emergency response, women's empowerment, and child protection.
              </p>
              <p className="text-muted-foreground">
                We are proud to partner with leading international organizations including UNICEF, UNDP,
                USAID, and the European Union, maintaining the highest standards of accountability and
                impact measurement.
              </p>
            </div>
            <img src={heroBg} alt="NOIA team at work" className="rounded-xl shadow-lg w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-card p-8 shadow-md border border-border/40"
            >
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower Afghan communities through sustainable development initiatives, quality
                education, humanitarian assistance, and advocacy, fostering self-reliance and
                resilience while upholding human dignity and rights for all.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-card p-8 shadow-md border border-border/40"
            >
              <Eye className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A prosperous, peaceful, and equitable Afghanistan where every individual has access
                to education, opportunities, and the resources needed to thrive — a nation where
                communities lead their own development and futures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl bg-card p-6 shadow-sm border border-border/30 text-center"
              >
                <v.icon className="mx-auto mb-3 h-8 w-8 text-secondary" />
                <h4 className="font-heading font-bold text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {leaders.map((l) => (
              <div key={l.name} className="rounded-xl bg-card p-6 shadow-sm border border-border/30 text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-foreground">{l.name}</h4>
                <p className="text-sm font-medium text-secondary mb-2">{l.role}</p>
                <p className="text-xs text-muted-foreground">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Transparency & Accountability</h2>
          <p className="text-muted-foreground mb-4">
            NOIA is committed to the highest standards of financial transparency and organizational
            accountability. We publish annual reports, undergo independent financial audits, and
            maintain open communication with our donors, partners, and the communities we serve.
          </p>
          <p className="text-muted-foreground">
            We are a registered NGO with the Afghan Ministry of Economy (License No. 4521) and
            adhere to international humanitarian principles and standards including the Core
            Humanitarian Standard (CHS).
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
