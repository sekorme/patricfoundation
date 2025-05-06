"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
    "/images/slider4.jpg",
    "/images/slider5.jpg",
    "/images/slider6.jpg",
];

export default function ImageSlider() {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerView = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

    const handlePrev = () => {
        setStartIndex((prev) => (prev === 0 ? images.length - itemsPerView : prev - itemsPerView));
    };

    const handleNext = () => {
        setStartIndex((prev) =>
            prev + itemsPerView >= images.length ? 0 : prev + itemsPerView
        );
    };

    const visibleImages = images.slice(startIndex, startIndex + itemsPerView);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            {/* Button Row */}
            <div className="flex justify-end gap-4 mb-4">
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition"
                >
                    <ArrowLeft className="w-5 h-5 text-black dark:text-white" />
                </button>
                <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition"
                >
                    <ArrowRight className="w-5 h-5 text-black dark:text-white" />
                </button>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <AnimatePresence mode="wait">
                    {visibleImages.map((src, i) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-64 rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={src}
                                alt={`Slide ${i}`}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
