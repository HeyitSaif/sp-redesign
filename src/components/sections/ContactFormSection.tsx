'use client'

import { useActionState, useEffect, useState, startTransition } from 'react'
import { submitContactForm } from '@/app/actions/contact'
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const initialState = {
  success: false,
  message: '',
  error: '',
}

export function ContactFormSection({ locale }: { locale: string }) {
  const isDe = locale === 'de'
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (state?.success) {
      const showTimer = setTimeout(() => setShowSuccess(true), 0)
      const hideTimer = setTimeout(() => setShowSuccess(false), 5000)
      return () => {
        clearTimeout(showTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [state?.success])

  return (
    <div
      className="bg-sp-bg-dark/80 group relative overflow-x-clip rounded-[2rem] border border-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20 md:p-12"
      id="contact"
    >
      <div className="from-sp-accent/5 to-sp-accent-dark/5 absolute inset-0 bg-gradient-to-tr via-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 right-0 left-0 z-50 flex items-center gap-3 rounded-t-[2rem] border-b border-emerald-500/50 bg-emerald-500/20 p-4 text-emerald-300 backdrop-blur-md"
          >
            <CheckCircle2 size={20} />
            <span className="font-medium">{state?.message || 'Success!'}</span>
          </motion.div>
        )}
        {state?.error && !isPending && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 right-0 left-0 z-50 flex items-center gap-3 rounded-t-[2rem] border-b border-red-500/50 bg-red-500/20 p-4 text-red-300 backdrop-blur-md"
          >
            <span className="font-medium">{state?.error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form action={formAction} className="relative z-10 mt-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group/input relative space-y-3">
            <label className="text-foreground/80 group-focus-within/input:text-sp-accent text-sm font-medium transition-colors">
              {isDe ? 'Name*' : 'Name*'}
            </label>
            <input
              type="text"
              name="name"
              className="focus:border-sp-accent/50 focus:ring-sp-accent/10 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white shadow-inner transition-all outline-none focus:bg-white/10 focus:ring-4"
              required
            />
          </div>
          <div className="group/input relative space-y-3">
            <label className="text-foreground/80 group-focus-within/input:text-sp-accent text-sm font-medium transition-colors">
              {isDe ? 'Email*' : 'Email*'}
            </label>
            <input
              type="email"
              name="email"
              className="focus:border-sp-accent/50 focus:ring-sp-accent/10 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white shadow-inner transition-all outline-none focus:bg-white/10 focus:ring-4"
              required
            />
          </div>
        </div>

        <div className="group/input relative space-y-3">
          <label className="text-foreground/80 group-focus-within/input:text-sp-accent text-sm font-medium transition-colors">
            {isDe ? 'Betreff' : 'Subject'}
          </label>
          <input
            type="text"
            name="subject"
            className="focus:border-sp-accent/50 focus:ring-sp-accent/10 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white shadow-inner transition-all outline-none focus:bg-white/10 focus:ring-4"
          />
        </div>

        <div className="group/input relative space-y-3">
          <label className="text-foreground/80 group-focus-within/input:text-sp-accent text-sm font-medium transition-colors">
            {isDe
              ? 'Welches Problem möchten Sie lösen? (Optional)'
              : 'What challenge are you looking to solve? (Optional)'}
          </label>
          <textarea
            name="message"
            rows={4}
            className="focus:border-sp-accent/50 focus:ring-sp-accent/10 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white shadow-inner transition-all outline-none focus:bg-white/10 focus:ring-4"
          />
        </div>

        <div className="space-y-4 pt-4">
          <label className="group/check flex cursor-pointer items-center gap-4">
            <div className="relative flex items-center justify-center">
              <input
                type="checkbox"
                name="marketing"
                className="peer checked:bg-sp-accent checked:border-sp-accent group-hover/check:border-sp-accent/50 h-6 w-6 cursor-pointer appearance-none rounded-lg border border-white/20 bg-white/5 shadow-inner transition-all duration-300"
              />
              <div className="pointer-events-none absolute scale-50 text-white opacity-0 transition-opacity duration-300 peer-checked:scale-100 peer-checked:opacity-100">
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.00001 7.8L1.20001 5L0.266678 5.93333L4.00001 9.66667L12 1.66667L11.0667 0.733337L4.00001 7.8Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <span className="text-foreground/70 text-[15px] transition-colors group-hover/check:text-white">
              {isDe ? 'Marketing E-Mails' : 'Marketing Emails'}
            </span>
          </label>

          <label className="group/check flex cursor-pointer items-center gap-4">
            <div className="relative flex items-center justify-center">
              <input
                type="checkbox"
                name="news"
                className="peer checked:bg-sp-accent checked:border-sp-accent group-hover/check:border-sp-accent/50 h-6 w-6 cursor-pointer appearance-none rounded-lg border border-white/20 bg-white/5 shadow-inner transition-all duration-300"
              />
              <div className="pointer-events-none absolute scale-50 text-white opacity-0 transition-opacity duration-300 peer-checked:scale-100 peer-checked:opacity-100">
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.00001 7.8L1.20001 5L0.266678 5.93333L4.00001 9.66667L12 1.66667L11.0667 0.733337L4.00001 7.8Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <span className="text-foreground/70 text-[15px] transition-colors group-hover/check:text-white">
              {isDe ? 'Neuigkeiten & Updates' : 'News & Updates Emails'}
            </span>
          </label>
        </div>

        <motion.button
          type="submit"
          disabled={isPending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-sp-accent hover:bg-sp-accent-dark group relative mt-8 flex w-full items-center justify-center gap-3 overflow-x-clip rounded-xl px-8 py-5 text-lg font-bold text-white shadow-[0_0_20px_rgba(255,112,67,0.3)] transition-all hover:shadow-[0_0_40px_rgba(255,112,67,0.6)]"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          {isPending ? (
            <>
              <Loader2 size={20} className="animate-spin" />{' '}
              {isDe ? 'Wird gesendet...' : 'Sending...'}
            </>
          ) : (
            <>
              {isDe ? 'Nachricht Senden' : 'Submit Message'}{' '}
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </>
          )}
        </motion.button>
      </form>
    </div>
  )
}
