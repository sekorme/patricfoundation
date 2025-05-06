"use client";

import { motion } from "framer-motion";
import { CheckCircle, Globe, Users, ShieldCheck } from "lucide-react";

const features = [
    {
        icon: <Globe size={40} className="text-blue-500" />,
        title: "Our Mission",
        description: "To provide sustainable education, healthcare, and clean water to underserved regions.",
    },
    {
        icon: <ShieldCheck size={40} className="text-green-500" />,
        title: "Our Vision",
        description: "A world where every child has access to knowledge, health, and opportunity.",
    },
    {
        icon: <Users size={40} className="text-purple-500" />,
        title: "Our Impact",
        description: "Over 10,000 lives touched across 50+ villages through direct outreach and projects.",
    },
    {
        icon: <CheckCircle size={40} className="text-orange-500" />,
        title: "Our Approach",
        description: "We work hand-in-hand with local communities, empowering them to lead their own transformation.",
    },
];



const bounceVariants = {
    animate: (i: number) => ({
        y: [0, -15, 0], // Move up and down
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2, // Creates a wave effect
        },
    }),
};

const AboutUs = () => {
    return (
        <section className="py-16 ">
            <div className="max-w-6xl mx-auto text-center px-6">
                {/* Heading Animation */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800 mb-6"
                >
                    About Us: <span className="text-indigo-600">Arkoh Watch Foundation</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}

                    className="text-gray-600 text-lg mb-12"
                >
                    We are a nonprofit organization committed to empowering underprivileged communities
                    through education, clean water, and essential care. Our work transforms lives and builds
                    alasting change.
                </motion.p>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-right">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={bounceVariants}
                            animate="animate"
                            custom={index}
                            className=" p-6 rounded-2xl shadow-md dark:bg-neutral-800 hover:shadow-xl transition-all cursor-pointer border-t-4 border-indigo-600"

                        >
                            <div className="flex justify-center" >{feature.icon}</div>
                            <h3 className="text-xl font-semibold dark:text-white text-gray-700 mt-4" >{feature.title}</h3>
                            <p className="text-gray-500 mt-2" >{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
