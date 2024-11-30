import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      <main className="container mx-auto">
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
      </main>
    </div>
  );
}
