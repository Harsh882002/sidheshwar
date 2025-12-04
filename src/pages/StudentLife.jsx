import React from 'react';
import Layout from '../components/Layout';
import { Library, Trophy, Users, ShieldAlert } from 'lucide-react';

const StudentLife = () => {
    return (
        <Layout title="Student Life">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 border-b-4 border-secondary inline-block">
                    Student Life
                </h1>

                {/* Facilities Grid */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-primary">Campus Facilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center group hover:-translate-y-1 transition-transform">
                            <div className="bg-primary/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Library size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Library</h3>
                            <p className="text-sm text-gray-600">
                                Well-stocked library with reference books, competitive exam material, and e-resources.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center group hover:-translate-y-1 transition-transform">
                            <div className="bg-primary/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Trophy size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Sports</h3>
                            <p className="text-sm text-gray-600">
                                Large playground and facilities for various indoor and outdoor games.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center group hover:-translate-y-1 transition-transform">
                            <div className="bg-primary/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Users size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">NSS</h3>
                            <p className="text-sm text-gray-600">
                                Active National Service Scheme unit for social service and personality development.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Support & Grievance */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-primary">Student Support</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-red-50 border border-red-100 p-6 rounded-lg">
                            <h3 className="font-bold text-xl mb-3 flex items-center gap-2 text-red-800">
                                <ShieldAlert /> Anti-Ragging Cell
                            </h3>
                            <p className="text-sm text-gray-700 mb-4">
                                Ragging is strictly prohibited. We have a zero-tolerance policy towards ragging.
                            </p>
                            <button className="bg-red-800 text-white px-4 py-2 rounded text-sm hover:bg-red-900">
                                Report Incident
                            </button>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg">
                            <h3 className="font-bold text-xl mb-3 text-blue-800">
                                Grievance Redressal
                            </h3>
                            <p className="text-sm text-gray-700 mb-4">
                                Students can submit their grievances to the SGRC or the Ombudsperson for fair resolution.
                            </p>
                            <button className="bg-blue-800 text-white px-4 py-2 rounded text-sm hover:bg-blue-900">
                                Submit Grievance
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default StudentLife;
