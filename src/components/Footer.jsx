import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6 font-sans">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-serif font-bold mb-4 text-secondary">Contact Us</h3>
                        <div className="space-y-3 text-gray-300">
                            <p className="flex items-start gap-2">
                                <MapPin size={18} className="mt-1 shrink-0" />
                                <span>
                                    Shri Siddheshwar Senior College,<br />
                                    Near Nagnath Temple, Erandeshwar,<br />
                                    Tal. Purna, Dist. Parbhani - 431513
                                </span>
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone size={18} />
                                <span>+91-8459430333, +91-7972788933</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <Mail size={18} />
                                <span>info@sidheswarcollege.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-serif font-bold mb-4 text-secondary">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link to="/academics" className="hover:text-secondary transition-colors">Academic Calendar</Link></li>
                            <li><Link to="/admissions" className="hover:text-secondary transition-colors">Admissions</Link></li>
                            <li><Link to="/contact" className="hover:text-secondary transition-colors">RTI Details</Link></li>
                            <li><Link to="/student-life" className="hover:text-secondary transition-colors">Anti-Ragging Cell</Link></li>
                        </ul>
                    </div>

                    {/* Map / Socials */}
                    <div>
                        <h3 className="text-xl font-serif font-bold mb-4 text-secondary">Find Us</h3>
                        <div className="bg-gray-800 h-40 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-gray-500">Google Map Placeholder</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-primary p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-primary p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="bg-primary p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Shri Siddheshwar Senior College. All rights reserved.</p>
                    <p className="mt-1">Designed & Developed for UGC Compliance.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
