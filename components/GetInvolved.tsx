"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, HeartHandshake, HandCoins, Megaphone, Globe, Smile } from "lucide-react";

const cards = [
    {
        title: "Volunteer Your Time",
        description:
            "Offer your skills to uplift children, support women, and build sustainable communities.",
        icon: <Users size={40} className="mx-auto text-indigo-600" />,
    },
    {
        title: "Give to a Cause",
        description:
            "Donate today to help fund health programs, scholarships, and life-saving resources.",
        icon: <HandCoins size={40} className="mx-auto text-indigo-600" />,
    },
    {
        title: "Spread the Word",
        description:
            "Advocate for justice. Share our work with your network and amplify our impact.",
        icon: <Megaphone size={40} className="mx-auto text-indigo-600" />,
    },
    {
        title: "Partner with Us",
        description:
            "Partner with Arkoh to scale outreach, run programs, and sponsor key initiatives.",
        icon: <HeartHandshake size={40} className="mx-auto text-indigo-600" />,
    },
    {
        title: "Join Our Global Network",
        description:
            "Connect with supporters, changemakers, and communities transforming lives worldwide.",
        icon: <Globe size={40} className="mx-auto text-indigo-600" />,
    },
    {
        title: "Sponsor a Smile",
        description:
            "Sponsor a child, a clinic, or a school initiative and make someone's tomorrow better.",
        icon: <Smile size={40} className="mx-auto text-indigo-600" />,
    },
];

export default function GetInvolved() {
    return (
        <section className="py-24 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 dark:from-neutral-900 dark:to-black">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-indigo-700 dark:text-white mb-6"
                >
                    Get Involved
                </motion.h2>
                <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-14">
                    Whether you're here to give, help, or connect there's always a way to make an impact with Arkoh Watch Foundation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-neutral-800 text-indigo-700 dark:text-indigo-300 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
                        >
                            {card.icon}
                            <h4 className="text-xl font-bold mt-4 mb-2">{card.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
