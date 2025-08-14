"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-bold text-foreground">
              NextJS
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#features"
                className="text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                Features
              </Link>
              <Link
                href="#about"
                className="text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Theme Toggle & Register Button */}
          <div className="hidden md:flex items-center gap-3">
            <AnimatedThemeToggler />
            <RainbowButton className="px-6 py-2">
              Register
            </RainbowButton>
          </div>

          {/* Mobile theme toggle, register button, and menu button */}
          <div className="md:hidden flex items-center gap-2">
            <AnimatedThemeToggler />
            <RainbowButton className="px-3 py-1.5 text-sm">
              Register
            </RainbowButton>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-foreground/80 focus:outline-none focus:text-foreground/80 ml-1"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence initial={false} mode="wait">
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="#features"
                  className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors duration-200"
                >
                  Features
                </Link>
                <Link
                  href="#about"
                  className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
