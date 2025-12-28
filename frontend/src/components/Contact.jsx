import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for your message! This is a demo form.");
    };

    return (
        <div className="pt-24 pb-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Get in Touch</h1>
                    <p className="text-xl text-slate-500">Have a project in mind? Let's talk about it.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="p-10 bg-slate-900 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <Mail className="text-blue-400" />
                                    <span>alainndizeye11@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone className="text-blue-400" />
                                    <span>+123 456 7890</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <MapPin className="text-blue-400" />
                                    <span>Kigali, Rwanda</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <p className="text-slate-400 text-sm">© 2024 Portfolio 26442. Built with Spring Boot & React.</p>
                        </div>
                    </div>

                    <div className="p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Your Name" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="john@example.com" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Tell me about your project..." required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2">
                                <span>Send Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
