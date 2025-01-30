import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/style.css"

import dr1 from '../assets/dr-1.png';
import dr2 from '../assets/dr-2.png';
import dr3 from '../assets/dr-14-1.jpg';
import dr4 from '../assets/dr-9.jpg';
import dr5 from '../assets/dr-8.jpg';
import dr6 from '../assets/dr-12-1.jpg';
import dr7 from '../assets/dr-11-1.jpg';

function DoctorSlider() {

    const doctors = [
        {
            name: "Dr. Juwariya Tasneem Syeda",
            specialty: "Dermatology",
            image: dr1,
            link: "https://www.asterclinic.ae/doctor/dr-juwariya-tasneem-syeda/"
          },
          {
            name: "Dr. Aishani Shah",
            specialty: "Dermatology",
            image: dr2,
            link: "https://www.asterclinic.ae/doctor/dr-aishani-shah/"
          },
          {
            name: "Dr. Nameer Abdul Majeed",
            specialty: "Dermatology",
            image: dr3,
            link: "https://www.asterclinic.ae/doctor/dr-nameer-abdul-majeed/"
          },
          {
            name: "Dr. K. Balachandran",
            specialty: "Dermatology",
            image: dr4,
            link: "https://www.asterclinic.ae/doctor/dr-k-balachandran/"
          },  
          {
            name: "Dr. K. Balachandran",
            specialty: "Dermatology",
            image: dr5,
            link: "https://www.asterclinic.ae/doctor/dr-k-balachandran/"
          },  
          {
            name: "Dr. Manoharan Ramalingam",
            specialty: "Dermatology",
            image: dr6,
            link: "https://www.asterclinic.ae/doctor/dr-manoharan-ramalingam/"
          },
          {
            name: "Dr. Beena Jose",
            specialty: "Dermatology",
            image: dr7,
            link: "https://www.asterclinic.ae/doctor/specialist-dermatologist-dubai/"
          },  
    ]

    const setting = {
        infinte: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true, // Enable auto-scroll
        // autoplaySpeed: 2000, // Auto-scroll speed in milliseconds
        responsive: [
            {
                breakpoint: 640, // For screens <= 640px (phones)
                settings: {
                    slidesToShow: 1, // Show 1 card
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    }

    return (
        <div className="mainContainer mx-auto px-10 sm:px-24">

            <h3 className="text-2xl font-bold">Doctors</h3>
            <div className="w-16 mt-2 border-b-2 border-green-600"></div>

            <div className="mt-6">

                <Slider {...setting}>
                    {doctors.map((doctor, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-slate-100 shadow-lg rounded-lg overflow-hidden text-center transform transition-transform duration-300 hover:scale-105">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-[350px] object-cover rounded-lg"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        <a
                                            href={doctor.profile}
                                            target="_blank"
                                        >
                                            {doctor.name}
                                        </a>
                                    </h3>
                                    <p className="text-slate-500">{doctor.specialty}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>

            </div>

        </div>
    )
}

export default DoctorSlider;