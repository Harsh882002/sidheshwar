import React from 'react';
import Layout from '../components/Layout';
import { User } from 'lucide-react';

const Administration = () => {
    const trustMembers = [
        { name: "Gajanan Shivajirao Kale", designation: "President", occupation: "Farmer" },
        { name: "Vyanktesh Bhimrao Kale", designation: "Vice President", occupation: "Social Work" },
        { name: "Kailas Madhukar Kale", designation: "Secretary", occupation: "Farmer" },
        { name: "Datta Uttamrao Mankari", designation: "Joint Secretary", occupation: "Service" },
        { name: "Gajanan Janardhan Kale", designation: "Treasurer", occupation: "Education" },
        { name: "Shallini Kailas kale", designation: "Member", occupation: "Education" },
        { name: "Digambar Janardhan Kale", designation: "Member", occupation: "Farmer" },
    ];

    return (
        <Layout title="Administration">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 border-b-4 border-secondary inline-block">
                    Administration
                </h1>

                {/* Key Officials */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-primary">Key Officials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <User size={48} className="text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold">Principal Name</h3>
                            <p className="text-primary font-medium">Principal</p>
                            <p className="text-sm text-gray-500 mt-2">Ph.D in Public Administration</p>
                        </div>
                        {/* Add more officials as needed */}
                    </div>
                </section>

                {/* Trust Members Table */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-primary">Shri Siddheshwar Vyayam Prasarak Mandal</h2>
                    <div className="overflow-x-auto bg-white rounded-lg shadow">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="p-4 border-b">Sr. No.</th>
                                    <th className="p-4 border-b">Name</th>
                                    <th className="p-4 border-b">Designation</th>
                                    <th className="p-4 border-b">Occupation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trustMembers.map((member, index) => (
                                    <tr key={index} className="hover:bg-gray-50 border-b last:border-b-0">
                                        <td className="p-4">{index + 1}</td>
                                        <td className="p-4 font-medium">{member.name}</td>
                                        <td className="p-4">{member.designation}</td>
                                        <td className="p-4">{member.occupation}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Committees */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-primary">Committees & Cells</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {["Internal Complaints Committee (ICC)", "Anti-Ragging Committee", "Student Grievance Redressal Committee", "SC/ST Cell", "OBC Cell", "Minority Cell"].map((committee, idx) => (
                            <div key={idx} className="bg-white p-4 rounded border-l-4 border-secondary shadow-sm">
                                <h3 className="font-bold text-lg">{committee}</h3>
                                <a href="#" className="text-sm text-primary hover:underline mt-1 inline-block">View Members</a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Administration;
