import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { createPortfolio, updatePortfolio, getPortfolioById } from '../services/portfolioService';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { ArrowLeft, Save } from 'lucide-react';

const PortfolioForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadPortfolio();
        }
    }, [id]);

    const loadPortfolio = async () => {
        try {
            const data = await getPortfolioById(id);
            setValue('title', data.title);
            setValue('description', data.description);
            setValue('imageUrl', data.imageUrl);
            setValue('projectUrl', data.projectUrl);
        } catch (error) {
            toast.error("Could not load portfolio");
        }
    };

    const onSubmit = async (data) => {
        try {
            if (id) {
                await updatePortfolio(id, data);
                toast.success("Updated successfully");
            } else {
                await createPortfolio(data);
                toast.success("Created successfully");
            }
            navigate('/projects');
        } catch (error) {
            toast.error("Operation failed");
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
            >
                <Link to="/projects" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition">
                    <ArrowLeft size={20} className="mr-2" /> Back to Projects
                </Link>

                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-8 text-slate-900 border-b pb-4">{id ? 'Edit Project' : 'New Project'}</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Project Title</label>
                            <input
                                {...register('title', { required: "Title is required" })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                placeholder="My Awesome App"
                            />
                            {errors.title && <span className="text-red-500 text-sm mt-1">{errors.title.message}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                            <textarea
                                {...register('description', { required: "Description is required" })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition h-40 resize-none"
                                placeholder="Tell the story of this project..."
                            />
                            {errors.description && <span className="text-red-500 text-sm mt-1">{errors.description.message}</span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Cover Image URL</label>
                                <input
                                    {...register('imageUrl')}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="https://..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Project / Repo URL</label>
                                <input
                                    {...register('projectUrl')}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="https://github.com/..."
                                />
                            </div>
                        </div>

                        <div className="pt-6">
                            <button type="submit" className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2">
                                <Save size={20} />
                                <span>Save Project</span>
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default PortfolioForm;
