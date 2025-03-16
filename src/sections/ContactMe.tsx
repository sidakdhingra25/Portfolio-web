"use client";

import type React from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            message: "",
          });
        }, 3000);
      } else {
        setIsSubmitting(false);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("An error occurred. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  if (inView) {
    controls.start("visible");
  }

  return (
    <section id="contact-me" className="py-24"> 
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-xl bg-black border border-gray-800 p-6 sm:p-8"
      >
        {isSubmitted ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <SendIcon className="text-black h-8 w-8" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <>
            <div className="mb-8 text-center">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-white mb-2"
              >
                Get in Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400"
              >
                I'd love to hear from you
              </motion.p>
            </div>

            <motion.form
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="company" className="text-white">
                  Company (Optional)
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="min-h-[120px] bg-gray-900 border-gray-700 text-white"
                />
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 transition-all" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </motion.form>
          </>
        )}
      </motion.div>
    </div>
    </section>
  );
}
