import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-24 pb-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">About Me</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1549692520-acc18482850b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Developer Workspace"
                            className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
                        />
                    </div>

                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                        <p>
                            Hello! I'm <strong>Ndizeye Alain</strong>, a passionate software engineering student (ID: 26442) with a deep love for building scalable web applications.
                        </p>
                        <p>
                            My journey in technology started with a simple curiosity about how things work on the internet. Fast forward to today, and I'm building full-stack applications using cutting-edge technologies like <strong>Spring Boot</strong> and <strong>React</strong>.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new Linux distributions, contributing to open-source projects, or learning about distributed systems architecture.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Java', 'Spring Boot', 'React', 'TypeScript', 'Docker', 'PostgreSQL', 'Linux', 'AWS'].map(tech => (
                                    <span key={tech} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
