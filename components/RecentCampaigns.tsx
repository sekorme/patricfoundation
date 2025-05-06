"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const campaigns = [
    {
        title: "Clean Water for Abomosu",
        description: "A new borehole system providing safe drinking water to 1,500+ villagers.",
        image: "/clearwater.jpg",
    },
    {
        title: "Back-to-School Kit Drive",
        description: "Distributed uniforms, books & backpacks to over 500 school children.",
        image: "/backtoschool.jpg",
    },
    {
        title: "Mobile Health Outreach",
        description: "Volunteer doctors and nurses reached 700+ people with free checkups.",
        image: "/mobilecare.jpeg",
    },
    {
        title: "Girls in Tech Workshop",
        description: "A 3-day bootcamp that introduced 80 girls to coding and tech careers.",
        image: "/girlstech.jpg",
    },
    {
        title: "Green Ghana Tree Planting",
        description: "1,000 trees planted in 3 communities to promote reforestation.",
        image: "/planting.jpg",
    },
    {
        title: "Orphanage Renovation",
        description: "Upgraded dormitories, kitchens, and learning centers for 3 homes.",
        image: "/renovating.jpg",
    },
];

export default function RecentCampaigns() {
    return (
        <section className="py-24 bg-white dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 dark:text-white mb-6"
                >
                    Recent Campaigns
                </motion.h2>
                <p className="text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12">
                    Discover the latest ways Arkoh Watch Foundation is making a difference across Ghanaian communities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {campaigns.map((campaign, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"

                        >
                            <Image
                                src={campaign.image}
                                alt={campaign.title}
                                width={500}
                                height={300}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">
                                    {campaign.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {campaign.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
