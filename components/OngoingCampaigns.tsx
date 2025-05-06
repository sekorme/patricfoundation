"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {Link} from "@heroui/link";
import PaymentModal from "@/components/PaymentModal";

const campaigns = [
    {
        title: "Health in other Countries",
        category: "Medicine",
        image: "/vacinationcamp.jpg",
        description:
            "Providing medical assistance and healthcare to those in need.",
        goal: "14 000$",
        pledged: "6 098$",
        progress: 23,
    },
    {
        title: "We Build and Create",
        category: "Education",
        image: "/generaleducamp.jpeg",
        description:
            "Empowering communities through education and skill development.",
        goal: "150 000$",
        pledged: "76 500$",
        progress: 51,
    },
    {
        title: "Healthy Food",
        category: "Food",
        image: "/foodcamp.jpg",
        description:
            "Providing nutritious meals and food supplies to those in need..",
        goal: "50 000$",
        pledged: "25 000$",
        progress: 50,
    },
    {
        title: "Water Delivery",
        category: "Water Delivery",
        image: "/watercamp.jpg",
        description:
            "Providing clean water access to remote villages.",
        goal: "25 000$",
        pledged: "18 000$",
        progress: 72,
    },
    {
        title: "Girls in Tech",
        category: "Education",
        image: "/educationcamp.jpeg",
        description:
            "Empowering young girls with technical skills in under-resourced communities.",
        goal: "100 000$",
        pledged: "46 000$",
        progress: 46,
    },
    {
        title: "Community Shelter",
        category: "Shelter",
        image: "/sheltercamp.jpg",
        description:
            "Rebuilding homes for displaced families in rural areas.",
        goal: "85 000$",
        pledged: "54 000$",
        progress: 63,
    },
];

export default function OngoingCampaigns() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(3);

    useEffect(() => {
        const updateSlides = () => {
            setVisibleSlides(window.innerWidth < 768 ? 1 : 3);
        };
        updateSlides();
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    const maxIndex = campaigns.length - visibleSlides;

    const next = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? 0 : prev - 1));
    };

    return (
        <section className="relative py-16 overflow-hidden">
            {/* Header */}
            <div className="text-center mb-12">
                <span className="text-sm" data-aos="fade-up">Ongoing Campaigns</span>
                <h2 className="text-4xl font-light">
                    <span className="text-indigo-600 font-bold" data-aos="fade-left">Arkoh Watch Foundation</span> Initiatives
                </h2>
            </div>

            {/* Arrows */}
            <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
                <button
                    onClick={prev}
                    className="p-2 bg-gray-200 dark:bg-gray-500 rounded-full hover:bg-gray-300"
                    disabled={currentIndex === 0}
                >
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                <button
                    onClick={next}
                    className="p-2 bg-gray-200 dark:bg-gray-500 rounded-full hover:bg-gray-300"
                    disabled={currentIndex >= maxIndex}
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Slider */}
            <div className="overflow-hidden px-6">
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${(100 / campaigns.length) * currentIndex}%)`,
                        width: `${(100 / visibleSlides) * campaigns.length}%`,
                    }}
                >
                    {campaigns.map((c, idx) => (
                        <div
                            key={idx}
                            style={{ width: `${100 / campaigns.length}%` }}
                            className="p-3"
                            data-aos="fade-right"
                        >
                            <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={c.image}
                                    alt={c.title}
                                    width={500}
                                    height={400}
                                    className="object-cover w-full h-full grayscale"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end text-white">
                  <span className="bg-white text-black px-3 py-1 rounded text-sm mb-2 w-fit">
                    {c.category}
                  </span>
                                    <h3 className="text-xl font-bold">{c.title}</h3>
                                    <p className="text-sm mb-3">{c.description}</p>
                                    <div className="w-full h-2 bg-white/30 rounded-full mb-2">
                                        <div className="h-2 rounded-full bg-green-400" style={{ width: `${c.progress}%` }}></div>
                                    </div>
                                    <div className="flex justify-between mb-4 text-sm">
                                        <span>Goal: {c.goal}</span>
                                        <span>Pledged: {c.pledged}</span>
                                    </div>
                                    <PaymentModal/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-10 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p className="mb-4 md:mb-0 max-w-xl" data-aos="fade-up">
                    Join us in supporting ongoing initiatives that make a real impact. Your donation can help us reach our goal.
                </p>
                <Link
                    href="#"
                    className="px-5 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition"
                    data-aos="fade-right"
                >
                    View All Campaigns
                </Link>
            </div>
        </section>
    );
}
