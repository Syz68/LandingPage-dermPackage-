import React from "react";
import Image from "../assets/HeroBanner.jpg"


function HeroSection() {
    return (
        <div>
            <img
                src={Image}
                alt="HeroSectionImage"
                className="w-full pt-10 shadow-xl rounded-lg h-48 sm:h-auto"
            />

        </div>
    )
}

export default HeroSection;