import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Handshake, Briefcase, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";

const opportunities = [
  {
    icon: Users,
    title: "Volunteer With Us",
    desc: "Join our team of dedicated volunteers and make a direct impact in Afghan communities. We welcome professionals, students, and anyone passionate about making a difference.",
    items: ["Field volunteer positions", "Remote/technical support", "Short-term missions", "Skills-based volunteering"],
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    desc: "We collaborate with international organizations, government agencies, private sector, and other NGOs. Partnership opportunities include joint programming, co-funding, and technical cooperation.",
    items: ["Joint program implementation", "Co-funding opportunities", "Technical partnerships", "Research collaboration"],
  },
  {
    icon: Briefcase,
    title: "Careers at NOIA",
    desc: "We're always looking for talented, passionate individuals to join our growing team. We offer competitive compensation, professional development, and meaningful work.",
    items: ["Program management roles", "Field coordination positions", "Finance & admin roles", "Monitoring & evaluation"],
  },
  {
    icon: Heart,
    title: "Become a Supporter",
    desc: "There are many ways to support our mission beyond financial donations. Spread the word, organize fundraisers, or become an ambassador for NOIA in your community.",
    items: ["Monthly giving program", "Corporate sponsorship", "Fundraising campaigns", "Social media advocacy"],
  },
];

const GetInvolved = () => {
  return (
    <Layout>
      <PageHero
        title="Get Involved"
        subtitle="Join us in creating lasting change. There are many ways to contribute."
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opp, i) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-card p-8 shadow-md border border-border/30"
              >
                <opp.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{opp.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{opp.desc}</p>
                <ul className="space-y-2 mb-6">
                  {opp.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-3 w-3 text-secondary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="gap-2">
                    Inquire Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-gradient section-padding text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Contact us today to learn how you can contribute to building a better future for Afghanistan.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground font-semibold hover:bg-accent/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
