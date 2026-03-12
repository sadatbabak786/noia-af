import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, Globe, BookOpen, Shield, HandHelping, ArrowRight, Mail, CheckCircle, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import educationImg from "@/assets/education-program.jpg";
import communityImg from "@/assets/community-dev.jpg";
import emergencyImg from "@/assets/emergency-response.jpg";
import womenImg from "@/assets/women-empowerment.jpg";
import childImg from "@/assets/child-protection.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const stats = [
{ icon: Users, value: "150,000+", label: "Beneficiaries Reached" },
{ icon: Globe, value: "18", label: "Provinces Served" },
{ icon: BookOpen, value: "85+", label: "Projects Implemented" },
{ icon: Shield, value: "14", label: "Years of Service" }];


const programs = [
{ title: "Education Programs", desc: "Providing quality education and literacy programs to underserved communities.", img: educationImg, link: "/programs" },
{ title: "Community Development", desc: "Building infrastructure and strengthening local governance.", img: communityImg, link: "/programs" },
{ title: "Emergency Response", desc: "Rapid humanitarian assistance during natural disasters and crises.", img: emergencyImg, link: "/programs" },
{ title: "Women Empowerment", desc: "Skills training, economic opportunities, and advocacy for women's rights.", img: womenImg, link: "/programs" },
{ title: "Child Protection", desc: "Creating safe spaces and support systems for vulnerable children.", img: childImg, link: "/programs" }];


const testimonials = [
{ quote: "Thanks to NOIA's education program, my children now have access to quality schooling. Our community has been transformed.", name: "Fatima H.", role: "Beneficiary, Bamyan Province" },
{ quote: "NOIA's emergency response team was the first to arrive after the earthquake. Their swift action saved many lives in our village.", name: "Ahmad K.", role: "Community Elder, Herat Province" },
{ quote: "The women's empowerment program gave me the skills and confidence to start my own tailoring business and support my family.", name: "Mariam S.", role: "Program Graduate, Kabul" }];


const partners = ["UNICEF", "UNDP", "WHO", "USAID", "EU", "GIZ", "JICA", "WFP"];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="NOIA community work" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl">
            
            <motion.div variants={fadeUp} custom={0} className="trust-badge mb-6">
              <CheckCircle className="h-4 w-4" /> Trusted by International Partners
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-primary-foreground mb-6">
              
               NOIA Afghanistan
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl">
              NOIA is dedicated to creating lasting change through education, community development,
              and humanitarian assistance across Afghanistan.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button size="lg" className="gap-2 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 text-base">
                  <Heart className="h-5 w-5" /> Donate Now
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 text-base">
                  Our Programs <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 text-base">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card -mt-16 relative z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-8">
            {stats.map((stat, i) =>
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="stat-card">
              
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-secondary" />
                <div className="text-3xl font-heading font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The National Organization of Initiative & Action (NOIA) is an Afghan-led, non-governmental
            organization committed to sustainable development and humanitarian response. Since 2010,
            we have been working alongside communities to build resilience, promote education, and
            create opportunities for vulnerable populations across Afghanistan.
          </p>
          <Link to="/about">
            <Button variant="outline" className="gap-2">
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We implement comprehensive programs that address the most pressing needs of Afghan communities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, i) =>
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="program-card">
              
                <img src={program.img} alt={program.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{program.desc}</p>
                  <Link to={program.link} className="text-sm font-semibold text-primary hover:text-primary/80 inline-flex items-center gap-1">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Voices from the Field
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl bg-card p-6 shadow-md border border-border/40">
              
                <Quote className="h-8 w-8 text-secondary/40 mb-4" />
                <p className="text-foreground/80 italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding section-alt">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((p) =>
            <div key={p} className="flex items-center justify-center rounded-lg bg-card px-8 py-4 shadow-sm border border-border/30 text-lg font-semibold text-muted-foreground">
                {p}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container mx-auto max-w-2xl text-center">
          <Mail className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">Subscribe to our newsletter for updates on our work and impact.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <Input placeholder="Your email address" type="email" className="flex-1" />
            <Button className="cta-gradient border-0 text-primary-foreground font-semibold">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="cta-gradient section-padding text-center">
        <div className="container mx-auto max-w-2xl">
          <HandHelping className="mx-auto mb-4 h-12 w-12 text-primary-foreground/80" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Make a Difference Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Your generous donation can help us reach more communities and create lasting change in Afghanistan.
          </p>
          <Link to="/donate">
            <Button size="lg" className="gap-2 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 text-lg px-10">
              <Heart className="h-5 w-5" /> Donate Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>);

};

export default Index;