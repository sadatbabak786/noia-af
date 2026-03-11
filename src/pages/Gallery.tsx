import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Video } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import educationImg from "@/assets/education-program.jpg";
import communityImg from "@/assets/community-dev.jpg";
import emergencyImg from "@/assets/emergency-response.jpg";
import womenImg from "@/assets/women-empowerment.jpg";
import childImg from "@/assets/child-protection.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import aboutHero from "@/assets/about-hero.jpg";

const categories = ["All", "Education", "Community", "Emergency", "Women", "Children"];

const photos = [
  { src: educationImg, alt: "Education program", category: "Education", caption: "Students learning in a NOIA community school, Bamyan" },
  { src: communityImg, alt: "Community development", category: "Community", caption: "Community well construction project, Herat" },
  { src: emergencyImg, alt: "Emergency response", category: "Emergency", caption: "Emergency aid distribution after the earthquake" },
  { src: womenImg, alt: "Women empowerment", category: "Women", caption: "Women's vocational training workshop, Kabul" },
  { src: childImg, alt: "Child protection", category: "Children", caption: "Children in a NOIA safe space" },
  { src: heroBg, alt: "Community work", category: "Community", caption: "Community members working together" },
  { src: aboutHero, alt: "Afghan landscape", category: "Community", caption: "Beautiful valleys where NOIA operates" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <Layout>
      <PageHero title="Gallery" subtitle="Explore photos and videos from our programs and community activities." />

      <section className="section-padding">
        <div className="container mx-auto">
          {/* Tabs */}
          <div className="flex items-center gap-4 mb-8 flex-wrap justify-center">
            <Camera className="h-5 w-5 text-primary" />
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.caption + i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-xl shadow-md"
              >
                <img src={photo.src} alt={photo.alt} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm text-primary-foreground font-medium">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center justify-center gap-2">
              <Video className="h-6 w-6 text-primary" /> Videos
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["NOIA 2025 Annual Highlights", "Education Program Documentary", "Emergency Response: Herat Earthquake"].map((title) => (
                <div key={title} className="rounded-xl bg-muted aspect-video flex items-center justify-center border border-border/30">
                  <div className="text-center">
                    <Video className="mx-auto mb-2 h-10 w-10 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
