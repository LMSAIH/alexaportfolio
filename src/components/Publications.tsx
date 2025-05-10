import { Link } from "react-router-dom";

const Publications = () => {
    return (
        <section className="py-16 px-6 md:px-20 bg-transparent" id="publications" >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-light mb-10 border-b border-indigo-400 pb-2 text-indigo-100">Recent Publications</h2>
                <div className="space-y-6">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="border-l-2 border-indigo-500 pl-4 hover:border-indigo-300 transition-colors duration-300">
                            <h3 className="text-lg font-medium text-indigo-200">Publication Title {item}</h3>
                            <p className="text-indigo-300 text-sm">Journal Name (Year)</p>
                            <p className="text-indigo-100 opacity-90 mt-2">
                                Brief abstract or description of the publication.
                            </p>
                            <a href="#" className="text-indigo-300 hover:text-indigo-200 text-sm inline-block mt-2 flex items-center group">
                                <span>View Publication</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <Link to="/publications" className="inline-flex items-center px-6 py-3 bg-indigo-900 bg-opacity-50 hover:bg-opacity-70 text-indigo-100 rounded-lg border border-indigo-700 transition-all backdrop-blur-sm group">
                        <span>View All Publications</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>

    )

}

export default Publications;