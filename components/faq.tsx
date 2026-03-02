"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is TrendSiptv?",
    answer:
      "TrendSiptv is a premium IPTV service that provides access to 21,000+ live TV channels and 65,000+ movies and series in 4K/UHD quality. We support all major devices including Smart TVs, Firestick, Android, iOS, MAG boxes, and PCs.",
  },
  {
    question: "How fast is the activation?",
    answer:
      "Activation is instant. Once your payment is confirmed, you will receive your login credentials via WhatsApp within minutes. You can start watching immediately.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! We offer a 24-hour free trial so you can test our service quality, channel lineup, and streaming stability before committing to a plan. Contact us on WhatsApp to request your trial.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 7-day money-back guarantee. If you are not satisfied with our service within the first 7 days of your subscription, contact our support team for a full refund. No questions asked.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods including credit/debit cards, PayPal, cryptocurrency, and bank transfers. Contact us on WhatsApp for the most convenient payment option for you.",
  },
  {
    question: "Can I use TrendSiptv on multiple devices?",
    answer:
      "Yes! Depending on your plan, you can use TrendSiptv on 1 to 3 devices simultaneously. Our Pro plan supports 2 devices and our Elite plan supports 3 devices for the whole family.",
  },
  {
    question: "What is Anti-Freeze Technology?",
    answer:
      "Our proprietary Anti-Freeze v10 engine ensures buffer-free streaming by automatically optimizing your connection and switching to the best available server. This means smooth, uninterrupted viewing even during peak hours.",
  },
  {
    question: "How do I set up TrendSiptv?",
    answer:
      "Setup is simple and takes under 5 minutes. After purchasing, we send you login credentials. Download a compatible IPTV player on your device, enter the credentials, and you're ready to stream. We provide step-by-step guides for every device.",
  },
]

export default function FAQ() {
  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Everything you need to know about TrendSiptv
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass overflow-hidden rounded-xl border-none px-6"
              >
                <AccordionTrigger className="py-5 text-left text-sm font-medium text-foreground hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
