"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import confetti from "canvas-confetti";
import { toast, Toaster } from "react-hot-toast";

const fakeNames = [
  "John",
  "Emma",
  "Alex",
  "Sophia",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "Ethan",
  "Mia",
  "Zoe",
  "Kai",
  "Luna",
  "Leo",
  "Aria",
  "Finn",
  "Nova",
  "Axel",
  "Isla",
  "Ryder",
];

const fakeProducts = [
  "Airbnb Hotels Dashboard 🏨",
  "Netflix Dashboard 🎬",
  "Car Sales Dashboard 🚙",
];

const emojis = ["🎉", "🚀", "💥", "⚡", "🔥", "💫", "✨", "🌟", "💪", "🏆"];

function useFlashyPurchaseToasts() {
  const [lastToastTime, setLastToastTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      if (now - lastToastTime > 8000) {
        // Show a toast every 8 seconds
        const name = fakeNames[Math.floor(Math.random() * fakeNames.length)];
        const product =
          fakeProducts[Math.floor(Math.random() * fakeProducts.length)];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];

        toast.custom(
          (t) => (
            <AnimatePresence>
              {t.visible && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: 50 }}
                  className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg shadow-lg"
                >
                  <div className="text-2xl mr-3">{emoji}</div>
                  <div>
                    <strong className="font-bold">{name}</strong> just purchased
                    the{" "}
                    <strong className="font-bold underline decoration-yellow-300">
                      {product}
                    </strong>
                    !
                  </div>
                  {/* <button
                    onClick={() => toast.dismiss(t.id)}
                    className="ml-4 bg-white text-purple-600 px-2 py-1 rounded-full text-xs font-bold transition-transform hover:scale-110"
                  >
                    Dismiss
                  </button> */}
                </motion.div>
              )}
            </AnimatePresence>
          ),
          { duration: 5000 }
        );

        // Trigger confetti
        // confetti({
        //   particleCount: 100,
        //   spread: 70,
        //   origin: { y: 0.6 },
        // });

        setLastToastTime(now);
      }
    }, 2000); // Check every 2 seconds

    return () => clearInterval(interval);
  }, [lastToastTime]);

  const showFlashyBuyNowToast = () => {
    toast.custom(
      (t) => (
        <AnimatePresence>
          {t.visible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 50 }}
              className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg shadow-lg"
            >
              <div className="text-2xl mr-3">🔥</div>
              <div className="font-bold text-lg">
                Limited Time Offer! Get 50% OFF now!
              </div>
              <button
                onClick={() => {
                  // Add your buy now logic here
                  toast.dismiss(t.id);
                }}
                className="ml-4 bg-white text-orange-500 px-4 py-2 rounded-full text-sm font-bold transition-transform hover:scale-110 hover:bg-yellow-100"
              >
                Buy Now!
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      ),
      { duration: 7000 }
    );
  };

  return { showFlashyBuyNowToast };
}

export function FlashyPurchaseToasts() {
  const { showFlashyBuyNowToast } = useFlashyPurchaseToasts();

  useEffect(() => {
    const buyNowInterval = setInterval(() => {
      showFlashyBuyNowToast();
    }, 45000); // Show "Buy Now" toast every 45 seconds

    return () => clearInterval(buyNowInterval);
  }, []);

  return <Toaster position="bottom-right" />;
}
