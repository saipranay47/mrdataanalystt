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

// Mock function to fetch product data
async function getProduct(id: string) {
  const products = [
    {
      id: 1,
      title: "Car Sales Dashboard",
      description: "Monitor your Car Sales with our Dashboard Template.",
      image: "/car.png",
      previewImage: "/car-preview.png",
      price: "₹199",
      fakePrice: "₹2799",
      category: "Templates",
      highlights: [
        "Interactive Power BI Dashboard",
        "Fuel type & model filters",
        "Dynamic brand selector",
        "High-quality visuals & icons",
        "Clean, ready-to-use dataset",
        "Step-by-step video tutorial",
      ],
      longDescription: `
        <div class="">
          <p><strong>Unlock the Power of Data Analysis with this Car Sales Power BI Dashboard!</strong></p>
          <p>Are you looking to enhance your <strong>data analysis skills</strong> and stand out to recruiters? This <strong>Car Sales Power BI Dashboard</strong> is the perfect project to showcase your abilities. With beautiful visualizations and in-depth insights on top automobile brands like <strong>BMW, Audi, Ford, Skoda</strong>, <strong>Toyota</strong> and more, this dynamic dashboard offers a complete overview of car sales data.</p>
          <h3>What’s Inside:</h3>
          <ul>
            <li><strong>Extracted Data Set</strong></li>
            <li><strong>Fully built Power BI Dashboard</strong> file</li>
            <li><strong>Interactive filters</strong> for fuel type, model, transmission, and year, giving you detailed insights in just a few clicks.</li>
            <li>A <strong>brand selector</strong> with car logos that instantly displays relevant sales data, making your dashboard visually appealing and dynamic.</li>
            <li><strong>High-quality images</strong> and icons to enhance the look and feel of your dashboard.</li>
            <li><strong>Clean, structured datasets</strong> ready for analysis.</li>
            <li>A <strong>step-by-step video tutorial</strong> to guide you through building this project.</li>
            <li><strong>Personal assistance</strong> if you need help during the setup!</li>
          </ul>
          <h3>Why You Need This:</h3>
          <ul>
            <li><strong>Boost your resume</strong> with a unique data analysis project.</li>
            <li><strong>Learn Power BI</strong> through hands-on experience.</li>
            <li>Impress recruiters with your ability to visualize and analyze real-world data.</li>
            <li><strong>Perfect for students and professionals</strong> looking to break into the IT or data analysis industry.</li>
          </ul>
          <p>Take the next step in your data journey and create a dashboard that truly stands out!</p>
          <p><strong>Get started today – Buy this Dashboard now and grab your Car Sales Power BI Dashboard now!</strong></p>
        </div>
      `,
    },
    {
      id: 2,
      title: "Netflix Dashboard",
      description:
        "Ratings, Genres, Shows by Country & Year, and much more in a single Dashboard.",
      image: "/netflix.png",
      previewImage: "/car-preview.png",
      price: "₹99",
      fakePrice: "₹2799",
      category: "Fonts",
      highlights: [
        "Ready-to-use Power BI files",
        "Curated datasets included",
        "Customizable analysis options",
        "Genre & country filters",
        "Step-by-step tutorial",
        "Logos for personalization",
      ],
      longDescription: `
        <div >
          <p><strong>Analyze Netflix Data Like Never Before!</strong></p>
          <p>Dive deep into Netflix trends with a <strong>ready-to-use Power BI dashboard</strong>. Understand ratings, genres, shows by country, and much more in a visually appealing format.</p>
          <h3>What You’ll Get:</h3>
          <ul>
            <li>Fully interactive Power BI Dashboard</li>
            <li>Clean, curated datasets included</li>
            <li>Country & genre-based filters</li>
            <li>Logos for enhanced visual appeal</li>
            <li>Step-by-step tutorial video</li>
          </ul>
          <p><strong>Boost your analytics skills</strong> and showcase your expertise with this incredible project!</p>
        </div>
      `,
    },
    {
      id: 3,
      title: "Airbnb Hotels Dashboard",
      description:
        "Monitor your Airbnb Hotel Bookings with our Dashboard Template.",
      image: "/airbnb.png",
      previewImage: "/car-preview.png",
      price: "₹149",
      fakePrice: "₹2799",
      category: "Fonts",
      highlights: [
        "Complete Airbnb dataset",
        "Interactive booking dashboard",
        "Customizable visuals & icons",
        "Step-by-step video guide",
        "Ready-to-use resources",
        "Ideal for India-based analysis",
      ],
      longDescription: `
        <div >
          <p><strong>Track Airbnb Bookings Like a Pro!</strong></p>
          <p>Enhance your analytics skills with a <strong>complete Airbnb Hotels Dashboard</strong>. Analyze bookings, locations, and pricing with clean datasets and step-by-step guidance.</p>
          <h3>Features:</h3>
          <ul>
            <li>India-specific Airbnb dataset</li>
            <li>Fully developed Power BI dashboard</li>
            <li>Customizable visual assets</li>
            <li>Step-by-step video tutorial</li>
          </ul>
          <p><strong>Upgrade your resume</strong> and impress recruiters with this practical project!</p>
        </div>
      `,
    },
  ];

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

  const productImages = [product.image, product.image, product.image];

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
                {/* Discover <br /> */}
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  {product.title}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mt-4 mb-8">
                {product.description}
              </p>
              {/* <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button className="mr-4 rounded-xl" size="lg">
                  Purchase Now
                </Button>
                <Button variant="outline" className="rounded-xl" size="lg">
                  Live Preview
                </Button>
              </motion.div> */}
            </>
          }
        >
          <Image
            src={product.previewImage}
            alt={product.title}
            width={1400}
            height={720}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
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
                        i < 4
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    4.5 (68)
                  </span>
                </div>
                {/* <Badge>Best Seller</Badge> */}
              </div>
              <CountdownTimer endTime={endTime} />
              <div className="flex gap-10">
                <Button className="w-full rounded-xl" size="lg">
                  Purchase Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-xl"
                  size="lg"
                >
                  Live Preview
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
                  />
                </motion.div>
              </div>
            }
            screenshots={
              <div className="max-w-none gap-8 lg:gap-20 relative grid grid-cols-1 lg:grid-cols-3">
                <div className="grid gap-6 sm:gap-8 col-span-2">
                  {[1, 2, 3].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <Image
                        src={product.image}
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
