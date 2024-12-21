import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FeaturesSectionDemo } from "@/components/featursSection";
import products from "@/data/products.json";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { VideoSection } from "@/components/video-section";
import { SocialMedia } from "@/components/social-media";
import { FAQSection } from "@/components/faq-section";
import Home from "@/components/Home";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      <Home />
      {/* <main className="container mx-auto">
        <section className="container flex flex-col items-center justify-center gap-6 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Empower Your Business:
            <br />
            Create and Sell with Framer!
          </h1>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Revolutionize Your Business with Mellow Template for Framer: Unlock
            the Power to Sell Your Digital Products Today and Reach a Wider
            Audience, All While Elevating Your Brand to New Heights of Success!
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="#">Browse Products</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#">About Us</Link>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <Link href="#" className="flex items-center gap-2 hover:underline">
              Read Customer Reviews
              <span className="text-lg">→</span>
            </Link>
          </div>
        </section>
      </main> */}
      <FeaturesSectionDemo />
      <div className="relative z-10 py-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-neutral-800">
            Browse Stunning Products
          </h2>
          <p className="text-neutral-600 mt-2">
            Explore our collection of stunning products and templates.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <Badge className="absolute right-2 top-2 ">
                  {product.price}
                </Badge>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" asChild>
                    <Link href={`/products/${product.id}`}>Know More</Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    Live Preview
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="min-h-screen bg-background">
        <VideoSection />
      </main>

      <main className="min-h-screen bg-background">
        <SocialMedia />
      </main>
      <main className="min-h-screen bg-background">
        <FAQSection />
      </main>
    </div>
  );
}
