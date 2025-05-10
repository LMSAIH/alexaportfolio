import React from "react";
import { Link } from "react-router-dom";

const FeaturedResearch = () => {
    return (
        <section className="py-20 px-6 md:px-16 relative" id="research">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-indigo-900/10 backdrop-blur-sm -z-10"></div>
            <div className="absolute w-full h-full -z-20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-10 w-60 h-60 bg-blue-600/5 rounded-full blur-3xl"></div>
            </div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>
            
            <div className="max-w-6xl mx-auto relative">
                <h2 className="text-2xl font-light mb-12 text-indigo-100 inline-block relative">
                    Featured Research
                    <span className="absolute bottom-0 left-0 w-1/3 h-px bg-indigo-400 opacity-70"></span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-10">
                    {[1, 2, 3].map((item) => (
                        <div 
                            key={item} 
                            className="group bg-indigo-800/10 hover:bg-indigo-800/15 backdrop-blur-sm border-t border-indigo-500/30 rounded-md overflow-hidden transition-all duration-300 relative"
                        >
                            {/* Card highlight effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-indigo-400/5 to-transparent pointer-events-none"></div>
                            
                            <div className="h-40 bg-indigo-900/20 relative overflow-hidden">
                                {/* Placeholder for research image */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-indigo-500/10"></div>
                                
                                {/* Abstract science visualization placeholder */}
                                <div className="h-full w-full flex items-center justify-center p-4">
                                    <div className="relative w-20 h-20">
                                        <div className="absolute inset-0 border border-indigo-400/20 rounded-full"></div>
                                        <div className="absolute inset-2 border border-indigo-400/30 rounded-full"></div>
                                        <div className="absolute inset-4 border border-indigo-400/40 rounded-full"></div>
                                        <div className="absolute inset-0 w-full h-full animate-pulse-slow opacity-50">
                                            <div className="absolute top-1/2 left-0 w-2 h-2 bg-indigo-400 rounded-full transform -translate-y-1/2"></div>
                                        </div>
                                        <div className="absolute inset-0 w-full h-full animate-spin-slow" style={{animationDuration: '10s'}}>
                                            <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-400 rounded-full transform -translate-y-1/2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6 relative">
                                <h3 className="text-lg font-medium mb-3 text-indigo-100">Research Project {item}</h3>
                                <p className="text-indigo-200 opacity-80 text-sm mb-6">
                                    Brief description of the research project and its significance.
                                </p>
                                <Link 
                                    to={`/research/${item}`} 
                                    className="text-indigo-300 hover:text-indigo-200 text-sm flex items-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <span className="border-b border-transparent group-hover:border-indigo-300 pb-px">Read More</span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-3.5 w-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                    >
                                        <path 
                                            fillRule="evenodd" 
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                                            clipRule="evenodd" 
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Add this to your tailwind.config.js extend section
// theme: {
//   extend: {
//     backgroundImage: {
//       'grid-pattern': "linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)"
//     },
//     backgroundSize: {
//       'grid-pattern': '40px 40px'
//     },
//     animation: {
//       'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       'spin-slow': 'spin 8s linear infinite',
//     }
//   }
// }

export default FeaturedResearch;