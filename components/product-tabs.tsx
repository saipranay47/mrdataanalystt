"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  overview: React.ReactNode;
  screenshots: React.ReactNode;
}

export function ProductTabs({
  overview,
  screenshots,
  className,
  ...props
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = React.useState<"overview" | "screenshots">(
    "overview"
  );

  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div className="flex space-x-4">
        <Button
          onClick={() => setActiveTab("overview")}
          variant={activeTab === "overview" ? "default" : "outline"}
          size="lg"
          className="w-full sm:w-auto"
        >
          Overview
        </Button>
        <Button
          onClick={() => setActiveTab("screenshots")}
          variant={activeTab === "screenshots" ? "default" : "outline"}
          size="lg"
          className="w-full sm:w-auto"
        >
          Screenshots
        </Button>
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "overview" ? overview : screenshots}
      </motion.div>
    </div>
  );
}
