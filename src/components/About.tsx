
const About = () => {

    return (
        <section id="about" className="py-20 px-6 md:px-16 relative" >
            <div className="absolute inset-0 bg-indigo-900/10 backdrop-blur-sm -z-10"></div>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-light mb-12 text-indigo-100 inline-block relative">
                    About Me
                    <span className="absolute bottom-0 left-0 w-1/3 h-px bg-indigo-400 opacity-70"></span>
                </h2>

                <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/3">
                        <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-6 h-80 flex items-center justify-center">
                            <span className="text-indigo-300">Profile Image</span>
                        </div>
                    </div>
                    <div className="md:w-2/3 text-indigo-100">
                        <h3 className="text-xl font-medium mb-4">Alexa Guido</h3>
                        <p className="mb-4">
                            Detailed information about your background, expertise, and research interests.
                            This section should give visitors a sense of who you are as a researcher and what drives your work.
                        </p>
                        <p className="mb-4">
                            Include information about your education, career journey, and significant achievements or contributions to your field.
                        </p>
                        <p className="mb-4">
                            You can also mention personal interests or approaches that influence your research methodology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;