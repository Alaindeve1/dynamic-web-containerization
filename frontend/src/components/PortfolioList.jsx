import React, { useEffect, useState } from 'react';
import { getAllPortfolios, deletePortfolio } from '../services/portfolioService';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Edit2, Trash2, ExternalLink, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const PortfolioList = () => {
    const [portfolios, setPortfolios] = useState([]);
    const { user } = useAuth(); // Assuming useAuth provides 'user'

    useEffect(() => {
        loadPortfolios();
    }, []);

    const loadPortfolios = async () => {
        try {
            const data = await getAllPortfolios();
            setPortfolios(data);
        } catch (error) {
            toast.error("Failed to load portfolios");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure?")) {
            try {
                await deletePortfolio(id);
                setPortfolios(portfolios.filter(p => p.id !== id));
                toast.success("Deleted successfully");
            } catch (error) {
                toast.error("Delete failed");
            }
        }
    };

    return (
        <div className="pt-24 pb-20 container mx-auto px-6 bg-slate-50 min-h-screen">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">Projects</h1>
                    <p className="text-slate-500 mt-2">Check out what I've been building</p>
                </div>
                {user && (
                    <Link to="/new" className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition flex items-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        <Plus size={20} />
                        <span>Add Project</span>
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolios.map((p, index) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    >
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={p.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'}
                                alt={p.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                                <a href={p.projectUrl} target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-slate-900 hover:bg-white hover:scale-110 transition">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold mb-2 text-slate-900">{p.title}</h3>
                            <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">{p.description}</p>

                            {user && (
                                <div className="pt-4 border-t border-slate-100 flex justify-between items-center mt-auto">
                                    <Link to={`/edit/${p.id}`} className="flex items-center space-x-1 text-sm font-medium text-amber-600 hover:text-amber-700">
                                        <Edit2 size={16} /> <span>Edit</span>
                                    </Link>
                                    <button onClick={() => handleDelete(p.id)} className="flex items-center space-x-1 text-sm font-medium text-red-500 hover:text-red-600">
                                        <Trash2 size={16} /> <span>Delete</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
                {portfolios.length === 0 && (
                    <div className="col-span-full text-center py-20 text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
                        <p>No projects found. Add one to get started!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioList;
