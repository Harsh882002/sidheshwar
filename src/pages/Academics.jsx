import React from 'react';
import Layout from '../components/Layout';
import { Book, Calendar, Users } from 'lucide-react';

const Academics = () => {
    return (
        <Layout title="Academics">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 border-b-4 border-secondary inline-block">
                    Academics
                </h1>

                {/* Programs */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                        <Book /> Academic Programs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* BA Card */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                            <div className="bg-primary text-white p-4">
                                <h3 className="text-xl font-bold">B.A. (Civil Services)</h3>
                                <p className="text-sm opacity-90">Bachelor of Arts</p>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-2 text-gray-700 mb-4">
                                    <li><strong>Duration:</strong> 3 Years</li>
                                    <li><strong>Eligibility:</strong> 12th Pass (Any Stream)</li>
                                    <li><strong>Medium:</strong> Marathi / English</li>
                                </ul>
                                <p className="text-sm text-gray-600 mb-4">
                                    Integrated preparation for UPSC, MPSC, SSC, IBPS, and other competitive exams along with the degree.
                                </p>
                                <h4 className="font-bold text-sm mb-2">Subjects:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["English", "Marathi", "History", "Geography", "Pol. Science", "Economics", "Sociology", "Public Admin"].map(sub => (
                                        <span key={sub} className="bg-gray-100 text-xs px-2 py-1 rounded">{sub}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* MA Card */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                            <div className="bg-primary text-white p-4">
                                <h3 className="text-xl font-bold">M.A. (Public Administration)</h3>
                                <p className="text-sm opacity-90">Master of Arts</p>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-2 text-gray-700 mb-4">
                                    <li><strong>Duration:</strong> 2 Years</li>
                                    <li><strong>Eligibility:</strong> Any Graduate</li>
                                    <li><strong>Medium:</strong> Marathi / English</li>
                                </ul>
                                <p className="text-sm text-gray-600 mb-4">
                                    Advanced studies in Public Administration suitable for administrative roles and research.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academic Calendar */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                        <Calendar /> Academic Calendar
                    </h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <p className="text-gray-600 mb-4">
                            The academic calendar is in accordance with the Kavikulaguru Kalidas Sanskrit University guidelines.
                        </p>
                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                            Download Academic Calendar 2025-26
                        </button>
                    </div>
                </section>

                {/* Faculty */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                        <Users /> Faculty
                    </h2>
                    <div className="bg-yellow-50 border-l-4 border-secondary p-4">
                        <p className="text-gray-700">
                            Our faculty consists of experienced professors and subject matter experts dedicated to student success.
                            Detailed faculty profiles are being updated.
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Academics;
