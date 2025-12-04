import React from 'react';
import Layout from '../components/Layout';
import { FileText, Award, Building } from 'lucide-react';

const About = () => {
    return (
        <Layout title="About HEI">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 border-b-4 border-secondary inline-block">
                    About Our Institution
                </h1>

                {/* Overview Section */}
                <section className="mb-12">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Building className="text-primary" /> Overview
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Shri Siddheshwar Senior College, Erandeshwar, is a premier institution run by Shri Siddheshwar Vyayam Prasarak Mandal.
                            We are dedicated to providing quality education in the fields of Arts and Public Administration.
                            Our college is affiliated to Kavikulaguru Kalidas Sanskrit University, Ramtek (Nagpur) and recognized by the Government of Maharashtra.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our mission is to empower students from rural backgrounds with the knowledge and skills required to excel in competitive exams like UPSC and MPSC,
                            fostering a generation of capable administrators and responsible citizens.
                        </p>
                    </div>
                </section>

                {/* Mandatory Disclosures Grid */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-primary">Mandatory Disclosures (UGC)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Act and Statutes / MoA",
                            "Institutional Development Plan",
                            "Accreditation Status (NAAC/NIRF)",
                            "Recognition (2(f) & 12(B))",
                            "Affiliation Letter",
                            "Annual Reports",
                            "Audited Accounts",
                            "AISHE Certificate"
                        ].map((item, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-4 rounded hover:shadow-md transition-shadow flex items-center justify-between group">
                                <span className="font-medium text-gray-700">{item}</span>
                                <a href="#" className="text-primary hover:text-secondary">
                                    <FileText size={20} />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default About;
