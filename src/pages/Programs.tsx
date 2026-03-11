import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import educationImg from "@/assets/education-program.jpg";
import communityImg from "@/assets/community-dev.jpg";
import emergencyImg from "@/assets/emergency-response.jpg";
import womenImg from "@/assets/women-empowerment.jpg";
import childImg from "@/assets/child-protection.jpg";

const programs = [
  {
    title: "Education Programs",
    img: educationImg,
    description: "NOIA's education programs focus on improving access to quality education for children and adults in underserved communities across Afghanistan. We operate community-based schools, teacher training programs, and adult literacy courses.",
    objectives: ["Increase school enrollment rates", "Improve quality of education", "Promote girls' education", "Provide adult literacy training"],
    activities: ["Community-based education classes", "Teacher professional development", "School infrastructure improvement", "Educational material distribution"],
    impact: { beneficiaries: "35,000+", schools: "120", teachers: "500+", provinces: "12" },
    story: "In Bamyan province, our community-based education program has enabled over 3,000 girls to access quality education for the first time. Local teacher Zahra says, 'These girls are now dreaming of becoming doctors and engineers.'"
  },
  {
    title: "Community Development",
    img: communityImg,
    description: "Our community development programs strengthen local governance, build essential infrastructure, and promote sustainable livelihoods. We work with communities to identify their priorities and co-design solutions.",
    objectives: ["Strengthen local governance", "Build critical infrastructure", "Promote sustainable livelihoods", "Enhance food security"],
    activities: ["Water and sanitation projects", "Road and bridge construction", "Agricultural training", "Community council support"],
    impact: { beneficiaries: "45,000+", projects: "30+", villages: "200+", wells: "150" },
    story: "The village of Dasht-e-Barchi received its first clean water supply through NOIA's well-drilling program. 'Our children no longer fall sick from contaminated water,' says village elder Mohammad."
  },
  {
    title: "Emergency Response",
    img: emergencyImg,
    description: "NOIA maintains rapid response capacity to deliver life-saving humanitarian assistance during natural disasters, conflicts, and other emergencies affecting Afghan communities.",
    objectives: ["Rapid emergency assessment", "Life-saving aid distribution", "Shelter and protection", "Early recovery support"],
    activities: ["Emergency food distribution", "Shelter kit provision", "Medical aid coordination", "Cash assistance programs"],
    impact: { beneficiaries: "25,000+", responses: "15+", distributions: "50,000+", provinces: "8" },
    story: "When the 2023 earthquake struck Herat, NOIA's emergency team was among the first responders, providing shelter kits and food to over 5,000 affected families within 72 hours."
  },
  {
    title: "Women Empowerment",
    img: womenImg,
    description: "We empower women through skills training, economic opportunities, health education, and advocacy. Our programs help women gain financial independence and active participation in community decision-making.",
    objectives: ["Economic empowerment", "Skills development", "Health awareness", "Leadership and advocacy"],
    activities: ["Vocational training", "Micro-enterprise support", "Health education sessions", "Women's self-help groups"],
    impact: { beneficiaries: "18,000+", enterprises: "500+", groups: "80", trained: "3,000+" },
    story: "Through NOIA's vocational training, Mariam learned tailoring and now runs a successful business employing five other women in her community. 'NOIA gave me hope and a future,' she says."
  },
  {
    title: "Child Protection",
    img: childImg,
    description: "NOIA creates safe spaces and support systems for vulnerable children, providing psychosocial support, recreational activities, and protection from exploitation and abuse.",
    objectives: ["Create safe spaces", "Psychosocial support", "Protection from exploitation", "Family strengthening"],
    activities: ["Child-friendly spaces", "Counseling services", "Awareness campaigns", "Reunification programs"],
    impact: { beneficiaries: "12,000+", spaces: "25", counselors: "40", communities: "60" },
    story: "After losing his parents, 10-year-old Arif found hope at NOIA's child-friendly space. 'I can play, learn, and feel safe here. The counselors are like family,' he says."
  },
];

const Programs = () => {
  return (
    <Layout>
      <PageHero
        title="Our Programs"
        subtitle="Comprehensive programs addressing the most pressing needs of Afghan communities."
      />

      <section className="section-padding">
        <div className="container mx-auto space-y-20">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              id={program.title.toLowerCase().replace(/\s+/g, "-")}
              className="scroll-mt-20"
            >
              <div className={`grid lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img src={program.img} alt={program.title} className="rounded-xl shadow-lg w-full h-72 object-cover" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{program.title}</h2>
                  <p className="text-muted-foreground mb-6">{program.description}</p>

                  <h4 className="font-heading font-bold text-foreground mb-2">Objectives</h4>
                  <ul className="mb-6 space-y-1">
                    {program.objectives.map((o) => (
                      <li key={o} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-3 w-3 text-secondary shrink-0" /> {o}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-heading font-bold text-foreground mb-2">Key Activities</h4>
                  <ul className="mb-6 space-y-1">
                    {program.activities.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-3 w-3 text-primary shrink-0" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Impact stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {Object.entries(program.impact).map(([key, val]) => (
                  <div key={key} className="stat-card">
                    <div className="text-2xl font-heading font-bold text-primary">{val}</div>
                    <div className="text-xs text-muted-foreground capitalize mt-1">{key}</div>
                  </div>
                ))}
              </div>

              {/* Success story */}
              <div className="mt-8 rounded-xl bg-trust-blue p-6 border border-border/30">
                <h4 className="font-heading font-bold text-foreground mb-2">Success Story</h4>
                <p className="text-sm text-muted-foreground italic">{program.story}</p>
              </div>

              {i < programs.length - 1 && <hr className="mt-16 border-border" />}
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
