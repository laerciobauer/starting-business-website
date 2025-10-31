"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in starting a business in Brazil"
    );
    const phoneNumber = "5511977799994";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white bg-opacity-5"></div>
      </div>

      <div
        ref={ref}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Brazilian Business Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Don't navigate the complex Brazilian business formation process
            alone. Get expert guidance from our experienced team and establish
            your company quickly, legally, and efficiently.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold group px-8 py-3"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            onClick={handleWhatsAppClick}
            className="border-white text-blue-600 hover:bg-gray-100 hover:text-green-600 font-semibold group px-8 py-3"
          >
            <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            WhatsApp Chat
          </Button>

          <a href="tel:+5511977799994">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-600 hover:bg-gray-100 hover:text-blue-600 font-semibold group px-8 py-3"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Call Now
            </Button>
          </a>
        </motion.div>

        <motion.div
          className="text-blue-100"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm mb-2">
            ✓ Free initial consultation • ✓ 10+ years experience • ✓ 500+
            companies formed
          </p>
          <p className="text-sm">
            Contact us:{" "}
            <a
              href="mailto:laercio@brazil.tm"
              className="underline hover:text-white transition-colors"
            >
              laercio@brazil.tm
            </a>{" "}
            •
            <a
              href="tel:+5511977799994"
              className="underline hover:text-white transition-colors ml-2"
            >
              +55 11 97779 9994
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
