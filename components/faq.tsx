"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQS as faqs } from "@/lib/site"


export default function FAQ() {
  return (
    <section id="faq" className="relative px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center lg:sticky lg:top-36 lg:self-start lg:text-left"
        >
          <span className="eyebrow mb-3">FAQ</span>
          <h2 className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl">
            IPTV Trends <span className="text-gradient">FAQ</span> - Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Quick answers about IPTV Trends: what it is, how much it costs, how the free trial and
            refunds work, which devices it supports and how to set it up.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className=""
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
              >
              <AccordionItem
                value={`item-${index}`}
                className="glass overflow-hidden rounded-2xl border-none px-6 transition-colors data-[state=open]:border-primary/40 data-[state=open]:bg-secondary/80"
              >
                <AccordionTrigger className="py-5 text-left text-sm font-semibold text-foreground hover:no-underline hover:text-primary sm:text-base [&>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent forceMount className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
