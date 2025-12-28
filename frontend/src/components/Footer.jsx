import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-white font-['Playfair_Display']">Portfolio 26442</h2>
                        <p className="mt-2 text-sm text-slate-400">Building digital experiences with passion.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Mail size={24} /></a>
                    </div>
                </div>
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm md:flex md:justify-between">
                    <p>&copy; 2024 Ndizeye Alain (26442). All rights reserved.</p>
                    <div className="space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
