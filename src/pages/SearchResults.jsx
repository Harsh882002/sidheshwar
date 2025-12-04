import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Search as SearchIcon, ArrowRight } from 'lucide-react';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);

    // Mock site content for search
    const siteContent = [
        { title: "Home", path: "/", content: "Shri Siddheshwar Senior College, Erandeshwar. B.A. Civil Services, M.A. Public Administration." },
        { title: "About HEI", path: "/about", content: "Overview, Affiliation, Accreditation, MoA, Annual Reports, 2(f) 12(B) status." },
        { title: "Administration", path: "/administration", content: "Principal, Trust Members, Executive Council, ICC, Ombudsperson." },
        { title: "Academics", path: "/academics", content: "B.A. Civil Services, M.A. Public Administration, Academic Calendar, Faculty." },
        { title: "Admissions", path: "/admissions", content: "Admission Process, Fee Structure, Prospectus, Reservation Policy." },
        { title: "Student Life", path: "/student-life", content: "Library, Sports, NCC, NSS, Hostel, Placement Cell, Anti-Ragging." },
        { title: "Contact", path: "/contact", content: "Address, Phone Number, Email, Location Map, RTI Details." },
    ];

    useEffect(() => {
        if (query) {
            const lowerQuery = query.toLowerCase();
            const filtered = siteContent.filter(page =>
                page.title.toLowerCase().includes(lowerQuery) ||
                page.content.toLowerCase().includes(lowerQuery)
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <Layout title="Search Results">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-serif font-bold text-primary mb-8">
                    Search Results for "{query}"
                </h1>

                <div className="max-w-3xl">
                    {results.length > 0 ? (
                        <div className="space-y-6">
                            {results.map((result, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-secondary transition-colors">
                                    <Link to={result.path} className="text-xl font-bold text-primary hover:underline flex items-center gap-2">
                                        {result.title} <ArrowRight size={16} />
                                    </Link>
                                    <p className="text-gray-600 mt-2">{result.content}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-gray-50 p-8 rounded-lg text-center">
                            <SearchIcon size={48} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-xl text-gray-600 font-medium">No results found for "{query}"</p>
                            <p className="text-gray-500 mt-2">Try searching for "Admissions", "Courses", or "Contact".</p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default SearchResults;
