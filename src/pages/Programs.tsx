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
    title: "Women's Empowerment & Leadership",
    img: womenImg,
    description: "In Afghanistan's complex socio-political landscape, NOIA is dedicated to transforming challenges into opportunities for growth and leadership. Empowering women to lead, advocate, and drive community change is central to NOIA's mission, with 62% of our beneficiaries being women and girls. Through leadership training, economic independence programs, and gender equality advocacy, we build resilient and equitable communities.",
    objectives: ["Foster women's leadership in crisis management and advocacy", "Promote economic independence through skills training", "Establish women-led networks for community decision-making", "Raise awareness about gender-based violence"],
    activities: ["Leadership training in provinces like Nangarhar and Parwan", "Financial literacy and entrepreneurship programs in Herat", "Women-led crisis response network establishment", "Awareness campaigns engaging 3,000+ individuals including men and community leaders"],
    impact: { beneficiaries: "5,000+", networks: "50+", leadershipIncrease: "40%", economicRise: "30%" },
    story: "From 2020 to 2024, more than 5,000 women benefited from leadership and economic programs. These efforts led to a 40% increase in women assuming leadership roles and a 30% rise in economic independence in Herat."
  },
  {
    title: "Crisis Response & Protection",
    img: emergencyImg,
    description: "Afghanistan's prolonged conflict and recurring natural disasters have left millions of families displaced and vulnerable. NOIA stands at the forefront of delivering timely, community-driven crisis response, with a focus on protecting women, children, and displaced families. By integrating gender-inclusive strategies and building local capacities, NOIA's interventions provide immediate relief and strengthen long-term community resilience.",
    objectives: ["Deliver rapid humanitarian assistance during crises", "Establish community-based crisis management platforms", "Build women-led emergency response networks", "Enhance community preparedness for future disasters"],
    activities: ["Emergency food, shelter, and healthcare distribution", "Training programs in crisis response and advocacy", "Women-led crisis response network coordination", "Collaborative community-based relief efforts"],
    impact: { beneficiaries: "5,000+", womenTrained: "150+", resilienceIncrease: "50%", preparednessRise: "30%" },
    story: "Between 2022 and 2024, over 5,000 individuals, 70% of whom were women and children, received life-saving support. Training empowered more than 150 local women to lead response efforts, reducing acute health risks by 40%."
  },
  {
    title: "Child Protection & Development",
    img: childImg,
    description: "Children account for 34% of NOIA's 50,835 beneficiaries, making their emotional well-being a cornerstone of our humanitarian response. NOIA launched psychosocial support programs integrating child-centered therapies such as expressive arts and play therapy, alongside education initiatives and health interventions that address the root causes of vulnerability.",
    objectives: ["Provide trauma-informed psychosocial support", "Improve access to quality education for displaced children", "Combat malnutrition and early marriage", "Train teachers in trauma-sensitive and gender-sensitive education"],
    activities: ["Safe learning spaces with counseling and coping skills programs", "Training 150 teachers in trauma-informed teaching", "Foundational literacy, numeracy, and accelerated learning programs", "Community awareness campaigns boosting school enrollment by 25%"],
    impact: { childBeneficiaries: "4,200+", girlsServed: "70%", teachersTrained: "150", enrollmentBoost: "25%" },
    story: "NOIA's education initiatives from 2020 to 2024 provided access to quality learning environments for over 4,200 displaced and marginalized children, 70% of whom were girls. Teacher training in trauma-sensitive education enhanced classroom inclusivity."
  },
  {
    title: "Health & Nutrition",
    img: communityImg,
    description: "Health and nutrition are vital pillars of resilience in Afghanistan. NOIA prioritizes health interventions that safeguard women, children, and pregnant women, fostering sustainable, community-based solutions to improve well-being and reduce health risks. From vaccination campaigns to maternal care programs, NOIA addresses critical health needs across underserved provinces.",
    objectives: ["Reduce malnutrition rates among children", "Expand vaccination coverage", "Provide prenatal care and maternal health education", "Build community health resilience through awareness"],
    activities: ["Nutritional support programs for 2,000+ children", "Vaccination campaigns immunizing 2,500 children", "Maternal health programs in remote areas", "Health awareness campaigns across Kabul, Laghman, and Kunar"],
    impact: { childrenBenefited: "2,000+", vaccinationCoverage: "+60%", maternalCare: "1,200+", malnutritionReduction: "35%" },
    story: "Vaccination campaigns immunized 2,500 children against measles, polio, and hepatitis, increasing vaccination coverage by 60%. Maternal health programs reduced pregnancy-related complications by 40% in remote areas between 2020 and 2024."
  },
  {
    title: "Environmental & Wildlife Protection",
    img: educationImg,
    description: "NOIA has consistently prioritized environmental conservation and wildlife protection as integral components of its mission to safeguard Afghanistan's rich ecological heritage. From reforestation to protecting endangered species like the Marco Polo sheep and migratory birds, NOIA develops targeted initiatives addressing habitat loss, unsustainable practices, and climate change.",
    objectives: ["Protect endangered species and vulnerable ecosystems", "Promote reforestation and sustainable land use", "Build community-centered environmental stewardship", "Raise awareness on climate change and biodiversity"],
    activities: ["40,000 trees planted in Paktia province (2023)", "Marco Polo sheep conservation in Badakhshan's Pamir region", "Migratory bird protection (Siberian crane, Eurasian teal) in Kapisa", "Community-based environmental education workshops"],
    impact: { treesPlanted: "40,000", workshopParticipants: "120+", volunteersTrained: "15+", huntingReduction: "30%" },
    story: "In 2023, NOIA planted 40,000 trees in Paktia, employing community members and conducting educational workshops. In Badakhshan, conservation efforts for the Marco Polo sheep led to community elders becoming active conservation advocates."
  },
];

const Programs = () => {
  return (
    <Layout>
      <PageHero
        title="Our Programs"
        subtitle="Innovative, evidence-based programs empowering communities across Afghanistan."
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
                    <div className="text-xs text-muted-foreground capitalize mt-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              {/* Success story */}
              <div className="mt-8 rounded-xl bg-trust-blue p-6 border border-border/30">
                <h4 className="font-heading font-bold text-foreground mb-2">Impact Highlight</h4>
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
