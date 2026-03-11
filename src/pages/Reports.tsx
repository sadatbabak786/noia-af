import { motion } from "framer-motion";
import { FileText, BarChart3, Shield, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";

const reports = [
  { title: "Annual Report 2025", type: "Annual Report", size: "4.2 MB" },
  { title: "Annual Report 2024", type: "Annual Report", size: "3.8 MB" },
  { title: "Annual Report 2023", type: "Annual Report", size: "3.5 MB" },
  { title: "Financial Statement 2025", type: "Financial", size: "1.2 MB" },
  { title: "Financial Statement 2024", type: "Financial", size: "1.1 MB" },
  { title: "Independent Audit Report 2025", type: "Audit", size: "2.1 MB" },
];

const policies = [
  "Anti-Fraud and Corruption Policy",
  "Safeguarding Policy",
  "Code of Conduct",
  "Gender Equality Policy",
  "Environmental Policy",
  "Whistleblower Protection Policy",
  "Data Protection Policy",
  "Conflict of Interest Policy",
];

const donors = [
  "United Nations Children's Fund (UNICEF)",
  "United Nations Development Programme (UNDP)",
  "United States Agency for International Development (USAID)",
  "European Union (EU)",
  "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
  "Japan International Cooperation Agency (JICA)",
  "World Food Programme (WFP)",
  "World Health Organization (WHO)",
];

const Reports = () => {
  return (
    <Layout>
      <PageHero title="Reports & Transparency" subtitle="We believe in full transparency and accountability to our donors, partners, and communities." />

      {/* Reports */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" /> Reports & Publications
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {reports.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between rounded-lg bg-card p-4 shadow-sm border border-border/30"
              >
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{r.title}</h4>
                  <p className="text-xs text-muted-foreground">{r.type} · {r.size}</p>
                </div>
                <Button variant="outline" size="sm" className="gap-1 shrink-0">
                  <Download className="h-3 w-3" /> PDF
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-primary" /> Financial Transparency
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Program Expenditure", value: "85%", desc: "Directly funds programs and beneficiaries" },
              { label: "Administration", value: "10%", desc: "Operational and management costs" },
              { label: "Fundraising", value: "5%", desc: "Donor relations and outreach" },
            ].map((item) => (
              <div key={item.label} className="stat-card">
                <div className="text-3xl font-heading font-bold text-primary">{item.value}</div>
                <div className="font-semibold text-foreground text-sm mt-1">{item.label}</div>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" /> Policies
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {policies.map((p) => (
              <div key={p} className="flex items-center gap-2 rounded-lg bg-card p-3 shadow-sm border border-border/30 text-sm text-foreground">
                <FileText className="h-4 w-4 text-muted-foreground shrink-0" /> {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donor Acknowledgments */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" /> Donor Acknowledgments
          </h2>
          <p className="text-muted-foreground mb-6">
            We are deeply grateful to our donors and partners whose generous support makes our work possible.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {donors.map((d) => (
              <div key={d} className="rounded-lg bg-card p-3 shadow-sm border border-border/30 text-sm text-foreground">
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reports;
