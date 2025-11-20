import React from "react";
// import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919925435830"
            target="_blank"
            title="whatsapp button"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 sm:p-4 p-2 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center z-50"
        >
            <FaWhatsapp size={28} color="white" />
        </a>
    );
};

export default WhatsAppButton;
