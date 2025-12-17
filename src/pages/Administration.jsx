import React from 'react';
import Layout from '../components/Layout';

const Administration = () => {

    const keyOfficials = [
        {
            name: "Kailas Kale",
            designation: "Secretary",
            institute: "Shri Siddheshwar Vyayam Prasarak Mandal, Erandeshwar",
            image: "/administration/kailas-kale.png", 
        },
        {
            name: "Dr. Shalini Kale",
            designation: "Principal",
            institute: "Shri Siddheshwar Senior College",
            image: "/administration/shalini-kale.png",  
        },
        
    ];

    const trustMembers = [
        { name: "Gajanan Shivajirao Kale", designation: "President", occupation: "Farmer" },
        { name: "Vyanktesh Bhimrao Kale", designation: "Vice President", occupation: "Social Work" },
        { name: "Kailas Madhukar Kale", designation: "Secretary", occupation: "Farmer" },
        { name: "Datta Uttamrao Mankari", designation: "Joint Secretary", occupation: "Service" },
        { name: "Gajanan Janardhan Kale", designation: "Treasurer", occupation: "Education" },
        { name: "Shallini Kailas Kale", designation: "Member", occupation: "Education" },
        { name: "Digambar Janardhan Kale", designation: "Member", occupation: "Farmer" },
    ];

    return (
        <Layout title="Administration">
            <div className="container mx-auto px-4 py-12">

                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10 border-b-4 border-secondary inline-block">
                    Administration
                </h1>

                {/* Key Officials */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-primary">
                        Key Officials
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {keyOfficials.map((person, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-6 text-center"
                            >
                                {/* Square Image */}
                                <div className="w-40 h-40 mx-auto mb-4 border overflow-hidden rounded-md bg-gray-100">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-gray-800">
                                    {person.name}
                                </h3>

                                <p className="text-primary font-medium">
                                    {person.designation}
                                </p>

                                <p className="text-sm text-gray-500 mt-2">
                                    {person.institute}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Trust Members */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-primary">
                        Shri Siddheshwar Vyayam Prasarak Mandal
                    </h2>

                    <div className="overflow-x-auto bg-white rounded-lg shadow">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="p-4">Sr. No.</th>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Designation</th>
                                    <th className="p-4">Occupation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trustMembers.map((member, index) => (
                                    <tr
                                        key={index}
                                        className="border-b hover:bg-gray-50"
                                    >
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
                    <h2 className="text-2xl font-bold mb-6 text-primary">
                        Committees & Cells
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Internal Complaints Committee (ICC)",
                            "Anti-Ragging Committee",
                            "Student Grievance Redressal Committee",
                            "SC/ST Cell",
                            "OBC Cell",
                            "Minority Cell"
                        ].map((committee, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-4 rounded shadow border-l-4 border-secondary"
                            >
                                <h3 className="font-bold">{committee}</h3>
                                <a
                                    href="#"
                                    className="text-sm text-primary hover:underline"
                                >
                                    View Members
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </Layout>
    );
};

export default Administration;
