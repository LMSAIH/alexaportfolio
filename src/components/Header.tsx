import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaResearchgate, FaGoogle } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";

const Header: React.FC = () => {
    return (
        <section className="min-h-screen py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center max-w-full mx-auto relative overflow-hidden" id="home">
 
            {/* Content */}
            <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8 z-10  " >
                <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 leading-tight text-white">
                    Hello, I'm <span className="font-medium text-indigo-300">Alexa Guido</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-indigo-100 mb-8 font-light">
                    Researcher in <span className="font-medium">[Specialization Area]</span>
                </h2>
                <p className="text-indigo-100 leading-relaxed mb-10 text-lg">
                    My work explores the fascinating intersection of <span className="font-medium text-indigo-200">[field 1]</span> and
                    <span className="font-medium text-indigo-200"> [field 2]</span>. Through rigorous research and innovative approaches,
                    I'm working to <span className="font-medium text-indigo-200">[research objective]</span> that can
                    <span className="font-medium text-indigo-200"> [potential impact]</span>.
                </p>
                
                {/* Social Links Section */}
                <div >
                    <p className="text-indigo-200 text-sm mb-3">Connect with me:</p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300" 
                           aria-label="LinkedIn">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300"
                           aria-label="GitHub">
                            <FaGithub size={20} />
                        </a>
                        <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300"
                           aria-label="Twitter">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300"
                           aria-label="ResearchGate">
                            <FaResearchgate size={20} />
                        </a>
                        <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300"
                           aria-label="Google Scholar">
                            <FaGoogle size={20} />
                        </a>
                        <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300"
                           aria-label="ORCID">
                            <SiOrcid size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Header;