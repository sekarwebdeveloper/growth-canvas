import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Web Development",
  "SEO",
  "Video Editing",
  "Graphic Designing",
  "Digital Marketing",
  "Shopify Development",
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setErrors({});
  };

  const inputClass = (field: string) =>
    `w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20 ${
      errors[field] ? "border-destructive" : "border-border"
    }`;

  return (
    <main>
      <PageHero title="Contact Us" subtitle="Let's start a conversation about your next project." />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                <p className="mt-2 text-sm text-muted-foreground">Fill out the form and we'll respond within 24 hours.</p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Name *</label>
                      <input
                        className={inputClass("name")}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Email *</label>
                      <input
                        type="email"
                        className={inputClass("email")}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Phone</label>
                      <input
                        className={inputClass("phone")}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Service</label>
                      <select
                        className={inputClass("service")}
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Message *</label>
                    <textarea
                      rows={5}
                      className={inputClass("message")}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="space-y-6">
                <div className="card-elevated p-6">
                  <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
                  <div className="mt-6 space-y-5">
                    {[
                      { icon: MapPin, label: "Address", value: "123 Business Avenue, Suite 100\nNew York, NY 10001" },
                      { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                      { icon: Mail, label: "Email", value: "hello@servicecare.com" },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.label}</p>
                          <p className="mt-0.5 text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="card-elevated overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin size={32} className="mx-auto mb-2 opacity-40" />
                      <p className="text-sm">Map Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
