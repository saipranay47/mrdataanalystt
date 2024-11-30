"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Heart, Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const products = [
  {
    title: "Car Sales Dashboard",
    description: "Monitor your Car Sales with our Dashboard Template.",
    image: "/car.png?height=200&width=300",
  },
  {
    title: " Netflix Dashboard",
    description: "Rating and Reviews Dashboard for Netflix.",
    image: "/netflix.png?height=200&width=300",
  },
];

const support = [
  {
    title: "Contact Us",
    description: "Send Us a Message and we'll be on our way to Help you!",
    icon: "📧",
  },
  {
    title: "FAQs",
    description: "If you've any questions, it's best to look at FAQs first!",
    icon: "❓",
  },
  {
    title: "Documentation",
    description: "Visit Our Documentation Site for Step-by-Step Guides.",
    icon: "📖",
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-2xl font-bold">M</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Browse Dashboards</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="relative grid w-[800px] grid-cols-[1fr_250px] gap-6 p-6"
                  >
                    <motion.div
                      className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-popover"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      {products.map((product) => (
                        <Link
                          key={product.title}
                          href="#"
                          className="group flex flex-col items-start gap-2 rounded-md bg-transparent p-4 hover:bg-muted"
                        >
                          <div className="relative h-[150px] w-full overflow-hidden rounded-md">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <h3 className="text-lg font-semibold group-hover:underline">
                            {product.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {product.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/products"
                      className="flex group flex-col hover:border-slate-300 border-white border justify-between rounded-md bg-gradient-to-b from-primary/10 via-primary/5 to-transparent p-6"
                    >
                      <div>
                        <h3 className="text-xl font-semibold">
                          View All Dashboards
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Browse our Collection of Stunning Dashboards.
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                        Browse Collection
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Contact & Support</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="relative grid w-[400px] gap-4 p-6"
                  >
                    <motion.div
                      className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-popover"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    />
                    {support.map((item) => (
                      <Link
                        key={item.title}
                        href="#"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-muted"
                      >
                        <div className="text-2xl">{item.icon}</div>
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          {item.title}
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Wall of Love <Heart className="ml-1 h-4 w-4" />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-auto flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex">
              <Link href="#" className="gap-2">
                Join Membership
                <motion.span
                  initial={{ x: -5 }}
                  animate={{ x: 0 }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
