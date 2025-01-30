import React from "react";
import FormSection from "./FormSection";

function InfoSection() {

    const packages = [
        {
            title: "Platelet Rich Plasma",
            description: "This procedure helps in reducing fine lines and wrinkles, reduces dark circles around the eyes, and gives a youthful appearance to the skin."
        },
        {
            title: "Thread Lifts",
            description: "An effective anti-ageing treatment, thread lifts help in tightening the skin so that it looks firm and rested."
        },
        {
            title: "Peeling Systems",
            description: "This procedure is greatly helpful in restoring sun damaged skin on the face, neck and hands. It also improves and rejuvenates the skin."
        },
        {
            title: "Botox",
            description: "Botox procedures reduce the wrinkles on the forehead, neck and around the mouth to give a youthful appearance to the skin."
        },
        {
            title: "Mesotherapy",
            description: "Instantly improve dull and tired looking skin and superficial wrinkles with this procedure. Mesotherapy is effective in treating hair fall, dark circles and sagging skin."
        },
        {
            title: "Skin Lasers",
            description: "Skin lasers minimize sun damage, acne scars and fine lines while also improving skin texture and skin tone."
        }
    ]

    return (
        <div className="mainContainer mx-auto py-10 px-10 sm:px-24">

            <div className="gridContainer grid lg:grid-cols-3 gap-8">

                <div className="textContainer lg:col-span-2 p-4 w-full rounded-2xl hover:shadow-lg">

                    <h3 className="text-2xl font-bold">Dermatology Procedures</h3>
                    <div className="w-24 border-b-2 border-green-600 mt-2"></div>

                    <p className="ml-4 mt-4 text-gray-700">Aster Clinic is offering attractive discounts on Dermatology procedures. Find the nearest Aster Clinic or book an appointment today to avail this limited period offer.</p>

                    <div className="infoContainer grid grid-cols-1 md:grid-cols-2 gap-8 m-4">

                        {packages.map((pkg, index)=>(
                            <div key={index} className="infoCard">
                                <h3 className="mb-2 text-lg text-blue-900">{pkg.title}</h3>
                                <p className="text-gray-600">{pkg.description}</p>
                                <div className="mt-4 border-t border-gray-400"></div>

                            </div>
                        ))}

                    </div>

                </div>

                <div className="formContainer col-span-1 w-full rounded-2xl hover:shadow-xl">
                    <FormSection />

                </div>



            </div>

        </div>
    )
}

export default InfoSection;























