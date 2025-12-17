import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Media = () => {
    const [images, setImages] = useState([]);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        setImages([
            "g1.png",
            "g2.png",
            "g3.png",
            "g4.png",
        ]);
    }, []);

    useEffect(() => {
        const cards = document.querySelectorAll(".media-card");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.15 }
        );

        cards.forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, [images]);

    return (
        <Layout title="Media Gallery">
            <div className="container mx-auto px-4 py-14">

                {/* Header Block */}
                <div className="mb-14">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-4 border-secondary inline-block mb-4">
                        Media Gallery
                    </h1>
                    <p className="text-gray-700 max-w-3xl">
                        Capturing moments from academic, cultural, sports and institutional
                        activities of Shri Siddheshwar Senior College, Erandeshwar.
                    </p>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="media-card opacity-0 translate-y-10 cursor-pointer"
                            onClick={() => setActiveImage(img)}
                        >
                            <div className="group relative overflow-hidden rounded-xl shadow-xl bg-white">
                                <img
                                    src={`/media/${img}`}
                                    alt="College Activity"
                                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                                    <span className="text-white text-lg tracking-wide font-semibold">
                                        View Image
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {activeImage && (
                    <div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setActiveImage(null)}
                    >
                        <img
                            src={`/media/${activeImage}`}
                            alt="Preview"
                            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
                        />
                    </div>
                )}

            </div>
        </Layout>
    );
};

export default Media;
