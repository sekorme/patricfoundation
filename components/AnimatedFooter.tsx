"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Facebook, Twitter, Instagram, Phone, MapPin } from "lucide-react";
import {Link} from "@heroui/link";

export default function AnimatedFooter() {
    return (
        <footer className="bg-indigo-700 dark:bg-neutral-900 text-white dark:text-gray-200 py-16 mt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* About */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="text-2xl font-bold mb-4">Arkoh Watch Foundation</h4>
                    <p className="text-indigo-100 dark:text-gray-300 text-sm">
                        We are committed to uplifting underserved communities through access to water, education, healthcare, and hope.
                    </p>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
                    <form className="flex flex-col sm:flex-row items-center gap-3">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-2 rounded text-indigo-900"
                        />
                        <button
                            type="submit"
                            className="bg-white text-indigo-700 px-4 py-2 rounded font-semibold hover:bg-indigo-100"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                    <div className="flex gap-4 text-white dark:text-gray-300">
                        <Link href="#" aria-label="Facebook"><Facebook /></Link>
                        <Link href="#" aria-label="Twitter"><Twitter /></Link>
                        <Link href="#" aria-label="Instagram"><Instagram /></Link>
                    </div>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h4 className="text-xl font-semibold mb-4">Contact</h4>
                    <div className="text-sm text-indigo-100 dark:text-gray-300 space-y-2">
                        <p className="flex items-start gap-2">
                            <MapPin size={16} /> P.O. Box 10, Agona Bobikuma-C/R, Ghana. West Africa
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone size={16} /> +233 0548020091
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail size={16} /> info@ArkohWatchFoundation.org
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="mt-12 border-t border-indigo-500 dark:border-neutral-700 pt-6 text-center text-sm text-indigo-200 dark:text-gray-500">
                &copy; {new Date().getFullYear()} Arkoh Watch Foundation. All rights reserved.
            </div>
        </footer>
    );
}
