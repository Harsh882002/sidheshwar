import React from 'react';
import Layout from '../components/Layout';
import { FileText, CheckCircle, HelpCircle } from 'lucide-react';

const Admissions = () => {
    return (
        <Layout title="Admissions">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 border-b-4 border-secondary inline-block">
                    Admissions
                </h1>

                {/* Admission Process */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-primary">Admission Process</h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                        <ol className="list-decimal list-inside space-y-4 text-gray-700">
                            <li className="pl-2"><strong>Registration:</strong> Collect the admission form from the college office or download it from the website.</li>
                            <li className="pl-2"><strong>Submission:</strong> Submit the filled form along with necessary documents (Mark sheets, TC, Caste Certificate, etc.).</li>
                            <li className="pl-2"><strong>Merit List:</strong> Admissions are granted based on merit and reservation rules as per Govt. of Maharashtra.</li>
                            <li className="pl-2"><strong>Fee Payment:</strong> Pay the prescribed fees to confirm admission.</li>
                        </ol>
                    </div>
                </section>

                {/* Fee Structure & Prospectus */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-primary">Fee Structure & Prospectus</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded border border-gray-200">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <FileText size={20} /> Prospectus 2025-26
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">Contains detailed information about courses, rules, and regulations.</p>
                            <button className="text-primary font-medium hover:underline">Download PDF</button>
                        </div>
                        <div className="bg-gray-50 p-6 rounded border border-gray-200">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <HelpCircle size={20} /> Fee Structure
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">Detailed fee breakdown for Grant-in-Aid and Non-Grant courses.</p>
                            <button className="text-primary font-medium hover:underline">View Fees</button>
                        </div>
                    </div>
                </section>

                {/* Reservation & Refund Policy */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-primary">Policies</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded shadow-sm flex items-start gap-3">
                            <CheckCircle className="text-green-600 mt-1 shrink-0" size={20} />
                            <div>
                                <h3 className="font-bold">Reservation Policy</h3>
                                <p className="text-sm text-gray-600">
                                    Reservations for SC/ST/OBC/VJNT/SBC/EWS are applicable as per the rules of the Government of Maharashtra and the University.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm flex items-start gap-3">
                            <CheckCircle className="text-green-600 mt-1 shrink-0" size={20} />
                            <div>
                                <h3 className="font-bold">Fee Refund Policy</h3>
                                <p className="text-sm text-gray-600">
                                    Refund of fees on cancellation of admission will be as per the University Grants Commission (UGC) guidelines.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Admissions;
