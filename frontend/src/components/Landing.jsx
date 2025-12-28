import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Layout } from 'lucide-react';

const Landing = () => {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Full Stack Developer</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-slate-900 leading-tight">
                        Crafting Digital <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Masterpieces</span>
                    </h1>
                    <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                        I build exceptional digital experiences that are fast, accessible, free, and responsive.
                        Let's turn your ideas into reality.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                        <Link to="/projects" className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center">
                            View Projects <ArrowRight className="ml-2" size={20} />
                        </Link>
                        <Link to="/contact" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center">
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Features/Skills Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <FeatureCard
                            icon={<Layout className="text-blue-500" size={40} />}
                            title="Frontend Development"
                            desc="Building beautiful, responsive user interfaces with React, Tailwind, and Modern JavaScript."
                        />
                        <FeatureCard
                            icon={<Database className="text-purple-500" size={40} />}
                            title="Backend Engineering"
                            desc="Designing robust APIs and microservices using Java Spring Boot and PostgreSQL."
                        />
                        <FeatureCard
                            icon={<Code className="text-green-500" size={40} />}
                            title="DevOps & Cloud"
                            desc="Deploying scalable applications with Docker, Kubernetes, and automated pipelines."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
    >
        <div className="mb-6 p-4 bg-white rounded-xl shadow-sm inline-block">{icon}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
);

export default Landing;
