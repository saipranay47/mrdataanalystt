"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

export function CountdownTimer({ endTime }: { endTime: Date }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const total = endTime.getTime() - Date.now();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isEnding = timeLeft.total <= 24 * 60 * 60 * 1000; // Less than 24 hours left

  return (
    <Card className={`w-full max-w-md ${isEnding ? "border-red-500" : ""}`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Limited Time Offer</h2>
          <AlertCircle
            className={`w-6 h-6 ${
              isEnding ? "text-red-500 animate-pulse" : "text-yellow-500"
            }`}
          />
        </div>
        <div className="grid grid-cols-4 gap-4 text-center">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
        {/* <Badge
          variant="outline"
          className="mt-4 w-full justify-center py-1 text-lg"
        >
          {isEnding ? "Hurry! Offer Ending Soon" : "Don't Miss Out!"}
        </Badge> */}
      </CardContent>
    </Card>
  );
}
