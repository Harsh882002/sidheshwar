import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full font-serif">
            {/* Top Bar */}
            <div className="bg-primary text-white text-sm py-2">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <span className="flex items-center gap-1"><Phone size={14} /> +91-8459430333</span>
                        <span className="flex items-center gap-1"><Mail size={14} /> info@sidheswarcollege.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center gap-1"><MapPin size={14} /> Erandeshwar, Dist. Parbhani</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-secondary/20 py-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Left Logo */}
                    <div className="w-24 h-24 rounded-full border-2 border-primary overflow-hidden flex items-center justify-center bg-white">
                        <img
                            src="/logo-bg/college.png"
                            alt="College Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>




                    {/* Center Text */}
                    <div className="text-center flex-1">
                        <h1 className="text-2xl md:text-4xl font-bold text-primary mb-1">
                            Shri Siddheshwar Senior College, Erandeshwar
                        </h1>
                        <p className="text-sm md:text-base font-semibold text-gray-700">
                            Affiliated to Kavikulaguru Kalidas Sanskrit University, Ramtek (Nagpur)
                        </p>
                        <p className="text-xs md:text-sm text-gray-600">
                            Recognized by Govt. of Maharashtra | Run by Shri Siddheshwar Vyayam Prasarak Mandal
                        </p>
                    </div>

                    {/* Right Logo */}
                    <div className="w-24 h-24 rounded-full border-2 border-primary overflow-hidden flex items-center justify-center bg-white">
                        <img
                            src="/logo-bg/kksu.png"
                            alt="University Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>

                </div>
            </div>


            {/* Navbar */}
            <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-14">
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-6 items-center font-sans font-medium">
                            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                            <Link to="/about" className="hover:text-secondary transition-colors">About HEI</Link>
                            <Link to="/administration" className="hover:text-secondary transition-colors">Administration</Link>
                            <Link to="/academics" className="hover:text-secondary transition-colors">Academics</Link>
                            <Link to="/admissions" className="hover:text-secondary transition-colors">Admissions</Link>
                            <Link to="/student-life" className="hover:text-secondary transition-colors">Student Life</Link>
                            <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
                        </div>

                        {/* Search Bar */}
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const q = e.target.search.value;
                            if (q.trim()) window.location.href = `/search?q=${encodeURIComponent(q)}`;
                        }} className="flex items-center bg-white/10 rounded-full px-3 py-1">
                            <input
                                name="search"
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none focus:outline-none text-white placeholder-white/70 text-sm w-32 md:w-48"
                            />
                            <button type="submit">
                                <Search size={18} className="text-white/70" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-primary border-t border-white/10">
                        <div className="flex flex-col p-4 space-y-3 font-sans">
                            <Link to="/" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/about" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>About HEI</Link>
                            <Link to="/administration" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Administration</Link>
                            <Link to="/academics" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Academics</Link>
                            <Link to="/admissions" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Admissions</Link>
                            <Link to="/student-life" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Student Life</Link>
                            <Link to="/contact" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
