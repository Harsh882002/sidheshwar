import React, { useEffect, useState } from "react";

const ImagePopup = () => {
    const [show, setShow] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const opened = sessionStorage.getItem("siteOpened");

        if (!opened) {
            setShow(true);
            sessionStorage.setItem("siteOpened", "true");
            // small delay to trigger animation
            setTimeout(() => setAnimate(true), 50);
        }

        const handleUnload = () => {
            sessionStorage.removeItem("siteOpened");
        };

        window.addEventListener("beforeunload", handleUnload);
        return () => window.removeEventListener("beforeunload", handleUnload);
    }, []);

    const closePopup = () => {
        setAnimate(false);
        setTimeout(() => setShow(false), 300); // match animation duration
    };

    if (!show) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4
            transition-opacity duration-300
            ${animate ? "bg-black/70 opacity-100" : "bg-black/0 opacity-0"}`}
            onClick={closePopup}
        >
            <div
                className={`relative max-w-3xl w-full
                transform transition-all duration-300 ease-out
                ${animate ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={closePopup}
                    className="absolute -top-3 -right-3 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-gray-200"
                >
                    ✕
                </button>

                {/* Popup Image */}
                <img
                    src="/pop-up/pop-up.png"
                    alt="Popup"
                    className="w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

export default ImagePopup;
