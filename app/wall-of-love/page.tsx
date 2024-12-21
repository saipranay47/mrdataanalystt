"use client";

import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/testimonial-card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Riya Patel",
    quote:
      "As a design student, I found the Netflix Dashboard super easy to use and visually appealing. It really helped me with my coursework.",
    rating: 5,
  },
  {
    name: "Aryan Malhotra",
    quote:
      "The Car Sales Dashboard is fantastic! I use it for my freelancing projects, and my clients love the insights it provides.",
    rating: 4.9,
  },
  {
    name: "Sneha Roy",
    quote:
      "The Airbnb Hotels Dashboard made my market research project so much easier. Great value for money!",
    rating: 4.8,
  },
  {
    name: "Jayesh Nair",
    quote:
      "As a data enthusiast, the Netflix Dashboard gave me exactly what I needed to analyze trends. It’s sleek and efficient.",
    rating: 5,
  },
  {
    name: "Tanya Singh",
    quote:
      "I’m a freelancer, and the Car Sales Dashboard saved me hours of manual work. Highly recommend it!",
    rating: 5,
  },
  {
    name: "Kabir Das",
    quote:
      "The Airbnb Dashboard is perfect for small property managers like me. It’s simple yet powerful.",
    rating: 4.7,
  },
  {
    name: "Aditi Sharma",
    quote:
      "I’m a final-year student, and the Netflix Dashboard helped me ace my data visualization project. Absolutely worth it!",
    rating: 5,
  },
  {
    name: "Vishal Kumar",
    quote:
      "I’ve been freelancing in market analysis, and the Car Sales Dashboard is now my go-to tool. Super useful!",
    rating: 4.8,
  },
  {
    name: "Megha Jain",
    quote:
      "The Airbnb Dashboard gave me a fresh perspective on analyzing booking trends. It’s well-designed and effective.",
    rating: 4.9,
  },
  {
    name: "Rohan Gupta",
    quote:
      "The Netflix Dashboard is my favorite! As a student working on OTT analytics, it was exactly what I needed.",
    rating: 5,
  },
  {
    name: "Nisha Agarwal",
    quote:
      "The Car Sales Dashboard is a lifesaver for freelancers like me working with auto dealerships. Easy to set up and use!",
    rating: 4.8,
  },
  {
    name: "Aditya Rao",
    quote:
      "As a part-time student and freelancer, I’ve used the Netflix Dashboard for multiple gigs. Always delivers great results!",
    rating: 5,
  },
  {
    name: "Sonal Mehta",
    quote:
      "The Airbnb Hotels Dashboard helped me track property bookings effortlessly. A great product for freelancers managing data.",
    rating: 4.9,
  },
  {
    name: "Karan Patel",
    quote:
      "I’m an aspiring data scientist, and the Car Sales Dashboard provided a great hands-on experience with real-world data.",
    rating: 5,
  },
  {
    name: "Simran Kaur",
    quote:
      "The Netflix Dashboard is user-friendly and aesthetically pleasing. As a student, I couldn’t have asked for more!",
    rating: 4.8,
  },
];

export default function WallOfLove() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Wall of Love
          </h1>
          <motion.p
            className="mt-5 max-w-xl mx-auto text-xl text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            See what our customers are saying about our PowerBI dashboard
            templates
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ready to transform your data visualization?
          </h2>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Explore Our Templates
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
