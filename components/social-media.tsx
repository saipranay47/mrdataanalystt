import { Instagram, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SocialMedia() {
  return (
    <section className="relative py-24 overflow-hidden" id="social">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted-foreground/5" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-red-500/5 rounded-full blur-3xl animate-drift" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-pink-500/5 rounded-full blur-3xl animate-drift-slow" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest Power BI tutorials and data analysis
            insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SocialCard
            platform="YouTube"
            icon={<Youtube className="w-8 h-8" />}
            count="200+"
            label="Subscribers"
            description="Power BI tutorials & data analysis guides"
            href="https://www.youtube.com/@MrDataAnalystt"
            gradient="from-red-500/10 via-background to-background"
            hoverAccent="hover:border-red-500 hover:shadow-red-500/10"
            iconClass="bg-red-100 text-red-600 group-hover:bg-red-600"
          />

          <SocialCard
            platform="Instagram"
            icon={<Instagram className="w-8 h-8" />}
            count="200+"
            label="Followers"
            description="Behind the scenes & daily data insights"
            href="https://www.instagram.com/mrdataanalystt"
            gradient="from-pink-500/10 via-background to-background"
            hoverAccent="hover:border-pink-500 hover:shadow-pink-500/10"
            iconClass="bg-pink-100 text-pink-600 group-hover:bg-pink-600"
          />
        </div>
      </div>
    </section>
  );
}

interface SocialCardProps {
  platform: string;
  icon: React.ReactNode;
  count: string;
  label: string;
  description: string;
  href: string;
  gradient: string;
  hoverAccent: string;
  iconClass: string;
}

function SocialCard({
  platform,
  icon,
  count,
  label,
  description,
  href,
  gradient,
  hoverAccent,
  iconClass,
}: SocialCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "hover:scale-105 hover:shadow-xl",
        hoverAccent
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-40",
          gradient
        )}
      />
      <Link href={href} target="_blank">
        <CardContent className="relative p-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div
              className={cn(
                "p-4 rounded-2xl transition-colors",
                iconClass,
                "group-hover:text-white"
              )}
            >
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{platform}</h3>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {count}
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {label}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
            <Button
              variant="outline"
              className={cn(
                "mt-4 transition-colors",
                "group-hover:bg-foreground group-hover:text-background"
              )}
            >
              Follow Us
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
