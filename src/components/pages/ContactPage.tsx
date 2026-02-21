"use client";

import { useActionState, useEffect, useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight, Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import { motion, AnimatePresence } from "framer-motion";

const initialState = {
  success: false,
  message: "",
  error: "",
};

export function ContactPage({ locale }: { locale: string }) {
  const isDe = locale === "de";
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state?.success]);

  return (
    <div className="flex flex-col w-full overflow-hidden pt-32 pb-24">
      <section className="relative min-h-[50vh] flex items-center py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                {isDe ? "Lassen Sie uns" : "Let's"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#ff8a65]">{isDe ? "reden" : "talk"}</span>.
              </h1>
              <p className="text-xl text-foreground/70 mb-12 max-w-xl leading-relaxed">
                {isDe 
                  ? "Vereinbaren Sie ein kurzes Gespräch oder senden Sie uns Ihre Informationen. Wir werden uns schnell und klar bei Ihnen melden."
                  : "Book a short call or send us your info. We'll be in touch, quick and clear."}
              </p>
              
              <div className="space-y-8 mt-16">
                {[
                  { icon: Mail, title: "Email", content: "hello@solutionplus.io", href: "mailto:hello@solutionplus.io" },
                  { icon: MapPin, title: isDe ? "Standorte" : "Locations", content: `Berlin, ${isDe ? "Deutschland" : "Germany"}\nLahore, Pakistan`, href: null },
                  { icon: Phone, title: isDe ? "Telefon" : "Phone", content: "+49 123 456 789", href: "tel:+49123456789" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(92,107,192,0.3)]">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-foreground/70 hover:text-white transition-colors text-lg whitespace-pre-line">{item.content}</a>
                      ) : (
                        <p className="text-foreground/70 leading-relaxed text-lg whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.2}>
            <div className="p-8 md:p-12 rounded-[2rem] bg-[#141618]/80 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <AnimatePresence>
                {showSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-0 left-0 right-0 p-4 bg-emerald-500/20 border-b border-emerald-500/50 text-emerald-300 flex items-center gap-3 z-50 backdrop-blur-md rounded-t-[2rem]"
                  >
                    <CheckCircle2 size={20} />
                    <span className="font-medium">{state?.message || "Success!"}</span>
                  </motion.div>
                )}
                {state?.error && !isPending && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-0 left-0 right-0 p-4 bg-red-500/20 border-b border-red-500/50 text-red-300 flex items-center gap-3 z-50 backdrop-blur-md rounded-t-[2rem]"
                  >
                    <span className="font-medium">{state?.error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form action={formAction} className="relative z-10 space-y-8 mt-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 relative group/input">
                    <label className="text-sm font-medium text-foreground/80 group-focus-within/input:text-primary transition-colors">{isDe ? "Name*" : "Name*"}</label>
                    <input type="text" name="name" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-white shadow-inner" required />
                  </div>
                  <div className="space-y-3 relative group/input">
                    <label className="text-sm font-medium text-foreground/80 group-focus-within/input:text-primary transition-colors">{isDe ? "Email*" : "Email*"}</label>
                    <input type="email" name="email" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-white shadow-inner" required />
                  </div>
                </div>

                <div className="space-y-3 relative group/input">
                  <label className="text-sm font-medium text-foreground/80 group-focus-within/input:text-primary transition-colors">{isDe ? "Betreff" : "Subject"}</label>
                  <input type="text" name="subject" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-white shadow-inner" />
                </div>

                <div className="space-y-3 relative group/input">
                  <label className="text-sm font-medium text-foreground/80 group-focus-within/input:text-primary transition-colors">{isDe ? "Welches Problem möchten Sie lösen? (Optional)" : "What challenge are you looking to solve? (Optional)"}</label>
                  <textarea name="message" rows={4} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-white resize-none shadow-inner" />
                </div>

                <div className="space-y-4 pt-4">
                  <label className="flex items-center gap-4 cursor-pointer group/check">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" name="marketing" className="peer appearance-none w-6 h-6 border border-white/20 rounded-lg bg-white/5 checked:bg-primary checked:border-primary transition-all duration-300 cursor-pointer shadow-inner group-hover/check:border-primary/50" />
                      <div className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-300 scale-50 peer-checked:scale-100">
                        <svg width="14" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.00001 7.8L1.20001 5L0.266678 5.93333L4.00001 9.66667L12 1.66667L11.0667 0.733337L4.00001 7.8Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                    <span className="text-[15px] text-foreground/70 group-hover/check:text-white transition-colors">{isDe ? "Marketing E-Mails" : "Marketing Emails"}</span>
                  </label>
                  
                  <label className="flex items-center gap-4 cursor-pointer group/check">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" name="news" className="peer appearance-none w-6 h-6 border border-white/20 rounded-lg bg-white/5 checked:bg-primary checked:border-primary transition-all duration-300 cursor-pointer shadow-inner group-hover/check:border-primary/50" />
                      <div className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-300 scale-50 peer-checked:scale-100">
                        <svg width="14" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.00001 7.8L1.20001 5L0.266678 5.93333L4.00001 9.66667L12 1.66667L11.0667 0.733337L4.00001 7.8Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                    <span className="text-[15px] text-foreground/70 group-hover/check:text-white transition-colors">{isDe ? "Neuigkeiten & Updates" : "News & Updates Emails"}</span>
                  </label>
                </div>

                <motion.button 
                  type="submit" 
                  disabled={isPending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 px-8 py-5 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(92,107,192,0.3)] hover:shadow-[0_0_40px_rgba(92,107,192,0.6)] flex justify-center items-center gap-3 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  {isPending ? (
                    <><Loader2 size={20} className="animate-spin" /> {isDe ? "Wird gesendet..." : "Sending..."}</>
                  ) : (
                    <>{isDe ? "Nachricht Senden" : "Send Message"} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
