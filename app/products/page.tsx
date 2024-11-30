import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    title: "Car Sales Dashboard",
    description: "Monitor your Car Sales with our Dashboard Template.",
    image: "/car.png",
    price: "₹199",
    category: "Templates",
  },
  {
    id: 2,
    title: "Netflix Dashboard",
    description:
      "Ratings, Genres, Shows by Country & Year, and much more in a single Dashboard.",
    image: "/netflix.png",
    price: "₹99",
    category: "Fonts",
  },
  {
    id: 3,
    title: "Airbnb Hotels Dashboard ",
    description:
      "Monitor your Airbnb Hotel Bookings with our Dashboard Template.",
    image: "/airbnb.png",
    price: "₹149",
    category: "Fonts",
  },
];

const categories = ["Templates", "Mockups", "Courses", "Fonts"];

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-8 md:py-12">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground">Products</span>
      </div>

      <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        Browse Stunning Products
      </h1>

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
              <Badge className="absolute right-2 top-2 ">{product.price}</Badge>
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
  );
}
