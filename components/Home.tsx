"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import DotPattern from "./DotPattern";
import BlurFade from "./magic-ui/blur-fade";
import Card from "./Card";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-2  bg-cover bg-center bg-no-repeat relative overflow-hidden">
      <div
        className="absolute inset-0  bg-cover bg-center bg-no-repeat"
        style={{ filter: "blur(5px)" }}
      ></div>
      <DotPattern className="z-0" />
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between rounded-xl p-4 sm:p-8 relative z-10">
        <div className="w-full lg:w-1/2 lg:mb-0">
          <BlurFade delay={0.15}>
            <h1 className="text-black text-3xl sm:text-5xl font-bold  mb-4">
              Accelerate Your Data Analysis With Ready-to-Use Dashboards
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="text-black text-lg sm:text-xl opacity-60 font-normal  mb-8 max-w-[564px]">
              Unlock the potential of your data with our professionally crafted
              Power BI dashboards. Perfect for businesses, freelancers, and data
              enthusiasts.
            </p>
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="/products" className="max-sm:w-full">
                <Button className="sm:w-[183px] w-full h-[59px] text-base font-bold bg-black rounded-xl flex items-center justify-center">
                  Get Started Now
                </Button>
              </Link>
              <Link href="/products" className="max-sm:w-full">
                <Button
                  variant="outline"
                  className="sm:w-[183px] w-full h-[59px] text-base font-bold rounded-xl flex items-center justify-center border-black border-2 border-opacity-10 hover:bg-white"
                >
                  View Dashboards
                </Button>
              </Link>
            </div>
          </BlurFade>

          <BlurFade delay={0.35}>
            <div className="flex flex-row items-center space-x-8">
              <div className="flex flex-col items-start">
                <span className="text-black text-[44px] font-semibold">
                  5,000+
                </span>
                <span className="text-black text-base font-normal">
                  Happy Customers
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-black text-[44px] font-semibold">
                  2M+
                </span>
                <span className="text-black text-base font-normal">
                  Dashboards Downloaded
                </span>
              </div>
            </div>
          </BlurFade>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="relative w-full max-w-[400px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-3xl h-[550px] sm:h-[650px] md:h-[700px] lg:h-[750px]">
            <Card
              src="/car.png"
              alt="Car Sales Dashboard"
              width={490}
              height={259}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[420px] md:w-[490px] lg:w-[490px]"
              isVisible={isVisible}
              initialTransform="translate(-45%, -120%) rotate(8deg)"
            />
            <Card
              src="/netflix.png"
              alt="Netflix Dashboard"
              width={294}
              height={305}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[252px] md:w-[294px] lg:w-[294px]"
              isVisible={isVisible}
              initialTransform="translate(-85%, -30%) rotate(-8deg)"
            />
            <Card
              src="/airbnb.png"
              alt="Airbnb Dashboard"
              width={274}
              height={305}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[235px] md:w-[274px] lg:w-[274px]"
              isVisible={isVisible}
              initialTransform="translate(-10%, 10%) rotate(16deg)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
