"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Help Us Save Lives",
        category: "Food Supply",
        image: "/fodo.jpg",
        description: "Donate to provide food and other supplies to those in need...",
        goal: "25 000$",
        date: "23 Jan'19",
    },
    {
        title: "They Needs Your Protection",
        category: "Protection",
        image: "/povdo.jpg",
        description: "Providing relief supplies and support to vulnerable communities...",
        goal: "35 000$",
        date: "23 Jan'19",
    },
    {
        title: "More than One Life Changed",
        category: "Medicine",
        image: "/vacdo.jpg",
        description: "Providing medical assistance and healthcare to those in need...",
        goal: "25 000$",
        date: "23 Jan'19",
    },
    {
        title: "Clean Water for All",
        category: "Water Delivery",
        image: "/waterdo.jpg",
        description: "Providing clean water access to remote villages...",
        goal: "20 000$",
        date: "10 Feb'19",
    },
];

export default function ProjectSlider() {
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

    const maxIndex = projects.length - visibleSlides;

    const next = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? 0 : prev - 1));
    };

    return (
        <section className="relative py-16  overflow-hidden">
            {/* Header */}
            <div className="text-center mb-12">
                <span className=" text-sm" data-aos="fade-up">What we Did</span>
                <h2 className="text-4xl font-light">
                    <span className="text-indigo-600 font-bold" data-aos={"fade-left"}>Arkoh Watch Foundation</span> Projects
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
                        transform: `translateX(-${(100 / projects.length) * currentIndex}%)`,
                        width: `${(100 / visibleSlides) * projects.length}%`,
                    }}
                >
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            style={{ width: `${100 / projects.length}%` }}
                            className="p-3"
                            data-aos="fade-right"
                        >
                            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={400}
                                    className="object-cover w-full h-full grayscale"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end text-white">
                  <span className="bg-green-300 text-black px-3 py-1 rounded text-sm mb-2 w-fit">
                    {project.category}
                  </span>
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="text-sm mb-3">{project.description}</p>
                                    <div className="flex justify-between text-sm">
                                        <span>Goal: {project.goal}</span>
                                        <span>Date: {project.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-10 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p className="mb-4 md:mb-0 max-w-xl" data-aos="fade-up">
                    We are committed to uplifting underserved communities through access to water, education, healthcare, and hope.
                </p>
                <a
                    href="#"
                    className="px-5 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition"
                    data-aos="fade-right"
                >
                    ALL WORKS
                </a>
            </div>
        </section>
    );
}
