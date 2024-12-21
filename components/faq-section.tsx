"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "What topics do your Power BI tutorials cover?",
    answer:
      "Our Power BI tutorials cover a wide range of topics, including dashboard creation, data modeling, DAX formulas, data visualization techniques, and real-world project walkthroughs. We focus on both beginner and advanced concepts to cater to all skill levels.",
  },
  {
    question: "How often do you upload new content?",
    answer:
      "We aim to upload new content weekly, typically releasing 1-2 new videos per week. This includes a mix of in-depth tutorials, quick tips, and project showcases. Be sure to subscribe to our YouTube channel and follow us on Instagram for the latest updates!",
  },
  {
    question: "Do you offer personalized coaching or consulting services?",
    answer:
      "Yes, we do offer personalized coaching and consulting services for individuals and businesses looking to enhance their data analysis and visualization skills. Please reach out to us via email or through our social media channels for more information on custom packages and rates.",
  },
  {
    question: "Can I suggest topics for future tutorials?",
    answer:
      "We love hearing from our community. You can suggest topics by commenting on our YouTube videos, sending us a message on Instagram, or emailing us directly. We regularly review suggestions and try to incorporate popular requests into our content planning.",
  },
  {
    question: "Are your tutorials suitable for complete beginners?",
    answer:
      "Yes, many of our tutorials are designed with beginners in mind. We offer a 'Getting Started with Power BI' series that covers the basics, and we always strive to explain concepts clearly. However, we also provide more advanced content for those looking to deepen their skills.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <CardTitle className="flex justify-between items-center text-lg">
          {question}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </CardTitle>
      </CardHeader>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <CardContent className="pt-0">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <p className="text-muted-foreground">{answer}</p>
              </motion.div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
