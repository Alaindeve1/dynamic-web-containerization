import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import PortfolioList from './components/PortfolioList';
import PortfolioForm from './components/PortfolioForm';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './context/AuthContext';

function App() {
    return (
        <Router>
            <div className="bg-slate-50 min-h-screen font-['Outfit']">
                <ToastContainer position="bottom-right" theme="light" />
                <Routes>
                    {/* Public Routes wrapped in Layout */}
                    <Route element={<Layout />}>
                        <Route path="/" element={<Landing />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/projects" element={<PortfolioList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        {/* Private Routes */}
                        <Route element={<PrivateRoute />}>
                            <Route path="/new" element={<PortfolioForm />} />
                            <Route path="/edit/:id" element={<PortfolioForm />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
