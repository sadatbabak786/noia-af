import aboutHero from "@/assets/about-hero.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => {
  return (
    <section className="page-hero">
      <img
        src={image || aboutHero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="page-hero-overlay" />
      <div className="relative z-10 text-center px-4 py-20">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
