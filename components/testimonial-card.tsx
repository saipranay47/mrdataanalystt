import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({ name, quote, rating }: TestimonialProps) {
  return (
    <motion.div
      className="flex flex-col bg-white rounded-lg border hover:shadow-md transition-all p-6 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      //   whileHover={{ scale: 1.03 }}
    >
      <h3 className="font-semibold text-lg">{name}</h3>
      <motion.div
        className="flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </motion.div>
      <motion.blockquote
        className="text-gray-700 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        &ldquo;{quote}&rdquo;
      </motion.blockquote>
    </motion.div>
  );
}
