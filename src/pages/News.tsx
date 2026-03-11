import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";

const posts = [
  { title: "NOIA Launches New Education Initiative in Badakhshan Province", date: "March 5, 2026", category: "Project Announcement", excerpt: "NOIA has partnered with UNICEF to launch a comprehensive education initiative targeting 5,000 children in remote areas of Badakhshan province." },
  { title: "Emergency Response: Supporting Earthquake-Affected Communities", date: "February 20, 2026", category: "Field Update", excerpt: "Our emergency response team has been deployed to provide immediate relief to communities affected by the recent earthquake in western Afghanistan." },
  { title: "Annual Report 2025 Released: A Year of Growth and Impact", date: "January 15, 2026", category: "Announcement", excerpt: "We are pleased to share our 2025 Annual Report, highlighting our achievements, challenges, and the incredible resilience of the communities we serve." },
  { title: "Women's Day Celebration: Empowering Afghan Women", date: "March 8, 2026", category: "Event", excerpt: "NOIA celebrated International Women's Day with events across five provinces, showcasing the achievements of women in our empowerment programs." },
  { title: "New Partnership with EU for Community Development", date: "February 1, 2026", category: "Partnership", excerpt: "NOIA has signed a new partnership agreement with the European Union to implement community development projects in four provinces." },
  { title: "Field Update: Winter Relief Distribution Complete", date: "January 28, 2026", category: "Field Update", excerpt: "Our winter relief program successfully distributed warm clothing, blankets, and heating fuel to 3,000 vulnerable families across northern Afghanistan." },
];

const News = () => {
  return (
    <Layout>
      <PageHero title="News & Updates" subtitle="Stay informed about our latest work, events, and impact." />

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-card p-6 shadow-sm border border-border/30 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="trust-badge text-xs">{post.category}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                  Read More <ArrowRight className="h-3 w-3" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
