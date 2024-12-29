"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCarousel } from "@/components/product-carousel";
import { ProductTabs } from "@/components/product-tabs";
import { PurchaseWidget } from "@/components/purchase-widget";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, MessageSquare, Star } from "lucide-react";
import { ContainerScroll } from "@/components/container-scroll-animation";
import { CountdownTimer } from "@/components/countdown-timer";
import { products } from "@/config/products";

// Mock function to fetch product data
async function getProduct(id: string) {
  return products.find((product) => product.id === Number(id));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  const productImages = product.carouselImages;

  const endTime = new Date(Date.now() + 3 * 60 * 60 * 1000);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black ">
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  {product.title}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mt-4 mb-8">
                {product.description}
              </p>
            </>
          }
        >
          <Image
            src={product.heroImage}
            alt={product.title}
            width={1400}
            height={720}
            className="mx-auto rounded-2xl object-cover object-left-top"
            draggable={false}
          />
        </ContainerScroll>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          <div className="relative col-span-1 lg:col-span-3">
            <ProductCarousel images={productImages} />
          </div>
          <div className="rounded-lg bg-muted/50 p-4 sm:p-6 lg:p-8 col-span-1 lg:col-span-2 flex justify-between flex-col">
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                What you will get:
              </h2>
              <ul className="mt-3 sm:mt-5 space-y-2 sm:space-y-3">
                {product.highlights.map((highlight, index) => (
                  <motion.li
                    key={highlight}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="text-sm sm:text-base text-muted-foreground"
                  >
                    - {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-primary">
                      {product.price}
                    </h2>
                    <span className="text-lg text-muted-foreground">
                      <s>{product.fakePrice}</s>
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating.value)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating.value} ({product.rating.count})
                  </span>
                </div>
                {/* <Badge>Best Seller</Badge> */}
              </div>
              <CountdownTimer endTime={endTime} />
              <div className="flex gap-10">
                <Button className="w-full rounded-xl" size="lg" asChild>
                  <Link href={product.purchaseLink} target="_blank">
                    Purchase Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <ProductTabs
            overview={
              <div className="max-w-none gap-8 lg:gap-20 relative grid grid-cols-1 lg:grid-cols-3">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  dangerouslySetInnerHTML={{ __html: product.longDescription }}
                  className="product-overview lg:col-span-2"
                ></motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="not-prose mt-8 lg:mt-2 lg:sticky lg:top-20 h-fit"
                >
                  <PurchaseWidget
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    previewImg={product.image}
                    purchaseLink={product.purchaseLink}
                  />
                </motion.div>
              </div>
            }
            screenshots={
              <div className="max-w-none gap-8 lg:gap-20 relative grid grid-cols-1 lg:grid-cols-3">
                <div className="grid gap-6 sm:gap-8 col-span-2">
                  {product.carouselImages.map((src, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <Image
                        src={src}
                        alt={`${product.title} Screenshot ${index + 1}`}
                        width={1200}
                        height={800}
                        className="rounded-lg border"
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="not-prose mt-8 lg:mt-2 lg:sticky lg:top-20 h-fit"
                >
                  <PurchaseWidget
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    previewImg={product.image}
                    purchaseLink={product.purchaseLink}
                  />
                </motion.div>
              </div>
            }
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
