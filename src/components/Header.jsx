import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full sticky top-0 z-50 bg-white shadow-md">

            {/* ================= TOP BAR (DESKTOP ONLY) ================= */}
            <div className="hidden md:block bg-primary text-white text-sm py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                            <Phone size={14} /> +91-8459430333
                        </span>
                        <span className="flex items-center gap-1">
                            <Mail size={14} /> info@sidheswarcollege.com
                        </span>
                    </div>
                    <span className="flex items-center gap-1">
                        <MapPin size={14} /> Erandeshwar, Dist. Parbhani
                    </span>
                </div>
            </div>

            {/* ================= MAIN HEADER ================= */}
            <div className="bg-secondary/20">
                <div className="container mx-auto px-3 py-2 md:py-5 flex items-center justify-between gap-2">

                    {/* Left Logo */}
                    <img
                        src="/logo-bg/college.png"
                        alt="College Logo"
                        className="w-10 h-10 md:w-24 md:h-24 object-contain flex-shrink-0"
                    />

                    {/* Center Text */}
                    <div className="flex-1 text-center leading-tight">
                        <h1 className="text-sm md:text-3xl font-bold text-primary">
                            Shri Siddheshwar Senior College
                        </h1>

                        {/* Affiliation – visible on mobile */}
                        <p className="text-[11px] md:text-sm font-semibold text-gray-700">
                            Affiliated to Kavikulaguru Kalidas Sanskrit University, Ramtek (Nagpur)
                        </p>

                        {/* Extra line – desktop only */}
                        <p className="hidden md:block text-xs text-gray-600">
                            Recognized by Govt. of Maharashtra | Run by Shri Siddheshwar Vyayam Prasarak Mandal
                        </p>
                    </div>

                    {/* Right Logo */}
                    <img
                        src="/logo-bg/kksu.png"
                        alt="University Logo"
                        className="w-10 h-10 md:w-24 md:h-24 object-contain flex-shrink-0"
                    />
                </div>
            </div>

            {/* ================= NAVBAR ================= */}
            <nav className="bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-12 md:h-14">

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-6 font-medium">
                            <Link to="/">Home</Link>
                            <Link to="/about">About HEI</Link>
                            <Link to="/administration">Administration</Link>
                            <Link to="/academics">Academics</Link>
                            <Link to="/admissions">Admissions</Link>
                            <Link to="/student-life">Student Life</Link>
                            <Link to="/media">Media</Link>
                            <Link to="/contact">Contact</Link>
                        </div>

                        {/* Search (hidden on very small screens) */}
                        <form className="hidden sm:flex items-center bg-white/10 rounded-full px-3 py-1">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent outline-none text-white placeholder-white/70 text-sm w-32 md:w-48"
                            />
                            <Search size={16} />
                        </form>
                    </div>
                </div>

                {/* ================= MOBILE MENU ================= */}
                {isMenuOpen && (
                    <div className="md:hidden bg-primary border-t border-white/10">
                        <div className="flex flex-col p-4 gap-3">
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About HEI</Link>
                            <Link to="/administration" onClick={() => setIsMenuOpen(false)}>Administration</Link>
                            <Link to="/academics" onClick={() => setIsMenuOpen(false)}>Academics</Link>
                            <Link to="/admissions" onClick={() => setIsMenuOpen(false)}>Admissions</Link>
                            <Link to="/student-life" onClick={() => setIsMenuOpen(false)}>Student Life</Link>
                            <Link to="/media" onClick={() => setIsMenuOpen(false)}>Media</Link>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
