import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Home = () => {
    return (
        <Layout title="Home">
            {/* Hero Section */}
            <section className="relative bg-primary text-white py-20">
                <div className="absolute inset-0 bg-black/40 z-0"></div>
                <section
                    className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/logo-bg/bg.png')"
                    }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50 z-0"></div>

                    <section className="relative text-white overflow-hidden h-[50vh]">

                        {/* Background Image (Full, No Crop) */}
                        <img
                            src="/logo-bg/bg.png"
                            alt="College"
                            className="absolute inset-0 w-full h-full object-contain object-center z-0"
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/40 z-10"></div>

                        {/* Content */}
                        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
                            <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
                                Shaping Future Leaders in Public Administration
                            </h1>
                            <p className="text-lg md:text-2xl mb-6 text-secondary font-medium">
                                B.A. (Civil Services) & M.A. (Public Administration)
                            </p>

                            <div className="flex flex-col md:flex-row justify-center gap-4">
                                <button className="bg-secondary text-primary px-6 py-2 rounded-full font-bold hover:bg-white transition-colors">
                                    Admissions Open 2025-26
                                </button>
                                <button className="border-2 border-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-primary transition-colors">
                                    Download Prospectus
                                </button>
                            </div>
                        </div>
                    </section>


                </section>

            </section>

            {/* Features Grid */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Specialized Curriculum</h3>
                        <p className="text-gray-600">
                            Dedicated syllabus for UPSC, MPSC, and other competitive exams integrated with regular degree courses.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary">
                        <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
                        <p className="text-gray-600">
                            Learn from experienced professors and guest lecturers who are experts in civil services coaching.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
                            <Award size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Scholarships Available</h3>
                        <p className="text-gray-600">
                            Government scholarships for SC, ST, VJNT, NT, OBC, and Open category students as per rules.
                        </p>
                    </div>
                </div>
            </section>

            {/* Notice Board Ticker */}
            <section className="bg-gray-200 py-3 border-y border-gray-300">
                <div className="container mx-auto px-4 flex items-center">
                    <span className="bg-primary text-white px-3 py-1 text-sm font-bold rounded mr-4 shrink-0">
                        LATEST NEWS
                    </span>
                    <div className="overflow-hidden whitespace-nowrap w-full">
                        <div className="inline-block animate-marquee text-sm font-medium text-gray-800">
                            Admissions open for B.A. Civil Services & M.A. Public Administration • Scholarship applications due by Oct 30th • Guest Lecture on Indian Constitution this Saturday.
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
