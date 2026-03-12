import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Shield, BookOpen, Award, Globe, Leaf, Brain } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import aboutHero from "@/assets/about-hero.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  { icon: Heart, title: "Compassion", desc: "We approach our work with empathy and genuine care for every individual we serve, especially women, children, and marginalized groups." },
  { icon: Shield, title: "Integrity & Transparency", desc: "We uphold the highest standards of transparency, accountability, and ethical conduct in all our operations." },
  { icon: Users, title: "Inclusivity", desc: "We serve all people regardless of ethnicity, gender, or background, with a focus on empowering women's leadership." },
  { icon: Globe, title: "Human Rights", desc: "We are committed to advancing human rights, fostering dignity, equality, and security for all." },
  { icon: Leaf, title: "Sustainability", desc: "We drive sustainable change through evidence-based approaches and strategic partnerships." },
  { icon: Brain, title: "Innovation", desc: "We embrace modern technology and data-driven approaches, bridging global best practices with local realities." },
];

const boardMembers = [
  { name: "Mr. Abdul Khalil", role: "Chairperson & Board Member", bio: "Extensive leadership experience with deep commitment to advancing equitable and sustainable development." },
  { name: "Mrs. Frozan Dawoodzai", role: "Board Member, Women's Rights Advocate", bio: "Renowned women's rights advocate with a master's degree in Gender Law, expertise in fragile contexts." },
  { name: "Mr. Mohammad Naem", role: "Board Member & Communication Specialist", bio: "Bachelor's degree in Law, innovative approach to advocacy and engagement strategies." },
  { name: "Mr. Sayed Wazir Amin", role: "Board Member & Human Advocacy Specialist", bio: "Seasoned human advocacy specialist with years of experience in human rights protection." },
  { name: "Mr. Muneebullah Safi", role: "Board Member & National Director", bio: "Comprehensive experience in program management and community engagement, leads NOIA's local operations." },
];

const teamMembers = [
  { name: "Mr. Muneebullah Safi", role: "Director", bio: "Leads the overall strategic direction of NOIA, overseeing all projects and stakeholder relationships." },
  { name: "Mr. Muhammad Asif Shinwari", role: "Deputy Director", bio: "Dynamic blend of technical expertise and leadership, expertise in IT solutions and digital initiatives." },
  { name: "Mrs. Fazila Alizadah", role: "Program Officer", bio: "Strategic management and operational functions, bridging communication between teams and partners." },
  { name: "Mr. Rahman Ali", role: "Finance Manager", bio: "Ensures financial transparency and integrity, manages budgeting and compliance." },
  { name: "Mrs. Arezoo Rasikh", role: "Gender Specialist", bio: "Develops gender-responsive strategies and training on gender inclusivity." },
  { name: "Ms. Khadija Khaleghi", role: "Senior Program Officer", bio: "Skilled legal professional managing project communications since March 2020." },
  { name: "Mr. Jamal Nasir Sadat", role: "Program Coordinator", bio: "Master's degree in Literacy, known for compassionate leadership and strategic planning." },
  { name: "Dr. Rahmatullah Ahmadi", role: "Children & Women's Health Specialist", bio: "Medical doctor with extensive experience in emergency relief and specialized medical assistance." },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        title="About NOIA"
        subtitle="Committed to Community Empowerment Since 2018."
        image={aboutHero}
      />

      {/* Overview */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                The National Organization of Initiative & Action (NOIA) was founded in November 2018 by a dynamic group of young Afghan women and men from diverse backgrounds, united by a shared passion for justice, democracy, and equality. Recognizing the urgent need for bold, innovative solutions in a nation grappling with prolonged conflict, inequality, and widespread human rights abuses, these visionary leaders established NOIA to be a force for change.
              </p>
              <p className="text-muted-foreground mb-4">
                Over 7 years, NOIA has reached 50,835 individuals across 8 provinces, with 62% women and girls, addressing critical issues through evidence-based programs shaped by their active participation. Our central office is located in Kabul, with regional sub-offices in Herat, Farah, Jalalabad, Kunduz, and Paktia.
              </p>
              <p className="text-muted-foreground">
                NOIA's unique combination of local focus and global engagement allows it to integrate international expertise into its Afghanistan-centered mission, offering innovative solutions tailored to the complexities of fragile environments.
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
                To empower Afghan communities by advancing women's leadership, fostering rural development, promoting social cohesion, providing psychological support to victims of violence, and implementing transformative projects that protect human rights, preserve the environment, and safeguard wildlife for a sustainable future, while also promoting cultural diversity.
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
                A future where Afghan communities are empowered in dignity, equality, and security, with women leading transformative change in development, human rights, environmental protection, and social cohesion, creating a resilient and sustainable society for all.
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

      {/* Board of Directors */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">Board of Directors</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {boardMembers.map((l) => (
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

      {/* Team in Action */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">Team in Action</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((l) => (
              <div key={l.name} className="rounded-xl bg-card p-6 shadow-sm border border-border/30 text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
                <h4 className="font-heading font-bold text-foreground text-sm">{l.name}</h4>
                <p className="text-xs font-medium text-secondary mb-2">{l.role}</p>
                <p className="text-xs text-muted-foreground">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-3xl text-center">
          <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Transparency & Accountability</h2>
          <p className="text-muted-foreground mb-4">
            NOIA is committed to the highest standards of financial transparency and organizational accountability. We publish annual reports, undergo independent financial audits, and maintain open communication with our donors, partners, and the communities we serve.
          </p>
          <p className="text-muted-foreground">
            NOIA upholds the dignity and rights of all, with a focus on empowering women's leadership in crisis response and community development. We are committed to integrity, transparency, and accountability, driving sustainable change through inclusive, evidence-based approaches and strategic partnerships.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
