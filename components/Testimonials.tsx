"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "Grace Nyarko",
        role: "Single Mother & Beneficiary",
        message:
            "Arkoh Watch Foundation gave my children access to clean water and school uniforms. I’ll forever be grateful for their kindness and support.",
        avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
        name: "Pastor Ebenezer",
        role: "Community Leader, Ashanti",
        message:
            "The impact of Arkoh in our village is divine. Boreholes, school kits, and even medical aid they walk the talk of transformation.",
        avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    },
    {
        name: "Abena Owusu",
        role: "Volunteer Nurse",
        message:
            "Working with Arkoh has been the most fulfilling part of my career. The smiles on those kids’ faces are worth every second.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Yaw Boateng",
        role: "Student, Eastern Region",
        message:
            "Thanks to Arkoh, I received a scholarship to complete my SHS education. May they continue to bless others like me.",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
        name: "Josephine Akua",
        role: "Midwife & Volunteer",
        message:
            "Providing maternal care with Arkoh Watch has allowed me to serve women in the most rural communities. It's life-changing.",
        avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
        name: "Daniel Kumi",
        role: "Youth Leader",
        message:
            "Arkoh Foundation doesn't just give handouts. They empower us with skills and purpose. I'm proud to be a volunteer.",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
        name: "Miriam Owusu",
        role: "Teacher & Beneficiary",
        message:
            "Books, solar lamps, and genuine care that’s what Arkoh has brought to our classrooms. Teaching now feels purposeful again.",
        avatar: "https://randomuser.me/api/portraits/women/31.jpg",
    },
    {
        name: "Samuel Djan",
        role: "Local Artisan",
        message:
            "Arkoh gave me tools to expand my craft and even start mentoring younger boys. They are building more than futures they build hope.",
        avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const visibleTestimonials = isMobile ? [testimonials[index]] : testimonials.slice(index, index + 3);

    return (
        <section className="relative py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-neutral-900 dark:to-black">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold text-indigo-700  mb-4">
                    Voices of Hope
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-12">
                    Stories from the hearts we’ve touched at <strong>Arkoh Watch Foundation</strong>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AnimatePresence mode="wait">
                        {visibleTestimonials.map((testimonial, i) => (
                            <motion.div
                                key={testimonial.name + i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white dark:bg-neutral-800 shadow-xl rounded-xl p-8"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full mb-4 object-cover border-4 border-indigo-200"
                                    />
                                    <p className="text-gray-700 dark:text-gray-200 italic mb-3">
                                        “{testimonial.message}”
                                    </p>
                                    <h4 className="text-indigo-700 dark:text-indigo-400 font-bold text-lg">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
