import React from 'react';
import Layout from '../components/Layout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <Layout title="Contact Us">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 border-b-4 border-secondary inline-block">
                    Contact Us
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                            <h2 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Address</h3>
                                        <p className="text-gray-600">
                                            Shri Siddheshwar Senior College,<br />
                                            Near Nagnath Temple, Erandeshwar,<br />
                                            Tal. Purna, Dist. Parbhani - 431513
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Phone</h3>
                                        <p className="text-gray-600">+91-8459430333</p>
                                        <p className="text-gray-600">+91-7972788933</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Email</h3>
                                        <p className="text-gray-600">info@sidheswarcollege.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Office Hours</h3>
                                        <p className="text-gray-600">Mon - Sat: 10:00 AM - 5:00 PM</p>
                                        <p className="text-gray-600">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RTI Section */}
                        <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
                            <h2 className="text-xl font-bold mb-4 text-primary">RTI Information</h2>
                            <p className="text-sm text-gray-700 mb-2">
                                <strong>Public Information Officer (PIO):</strong> Principal
                            </p>
                            <p className="text-sm text-gray-700">
                                <strong>Appellate Authority:</strong> President, Shri Siddheshwar Vyayam Prasarak Mandal
                            </p>
                        </div>
                    </div>

                    {/* Map & Form */}
                    <div>
                        {/* Map Placeholder */}
                        <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center mb-8">
                            <span className="text-gray-500 font-medium">Google Map Embed</span>
                        </div>

                        {/* Contact Form */}
                        <form className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea rows="4" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"></textarea>
                                </div>
                                <button type="button" className="w-full bg-primary text-white font-bold py-2 rounded hover:bg-primary/90 transition-colors">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
