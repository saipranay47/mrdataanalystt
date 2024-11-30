"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background"
        >
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">M</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="container flex flex-col gap-8 pt-8 text-center"
          >
            <Link
              href="#"
              className="text-2xl font-medium transition-colors hover:text-primary"
              onClick={onClose}
            >
              Browse Products
            </Link>
            <Link
              href="#"
              className="text-2xl font-medium transition-colors hover:text-primary"
              onClick={onClose}
            >
              Contact & Support
            </Link>
            <Link
              href="#"
              className="text-2xl font-medium transition-colors hover:text-primary"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-2xl font-medium transition-colors hover:text-primary"
              onClick={onClose}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-2xl font-medium transition-colors hover:text-primary"
              onClick={onClose}
            >
              Wall of Love <Heart className="ml-2 inline-block h-5 w-5" />
            </Link>
            <Button className="mt-8" size="lg" asChild>
              <Link href="#" onClick={onClose}>
                Join Membership
                <span className="ml-2">→</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
