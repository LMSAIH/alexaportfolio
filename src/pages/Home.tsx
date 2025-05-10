import React from "react";
import Header from "../components/Header";
import SpaceBackground from "../components/SpaceBackground";
import FeaturedResearch from "../components/FeaturedResearch";
import Publications from "../components/Publications";
import About from "../components/About";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen text-gray-100 bg-transparent overflow-x-hidden" >
            {/* Global Space Background */}
            <SpaceBackground />
            <NavBar />

            {/* Hero Section */}
            <Header />

            <FeaturedResearch />

            <Publications />

            <About />

            <Footer />


        </div>
    );
};

export default Home;