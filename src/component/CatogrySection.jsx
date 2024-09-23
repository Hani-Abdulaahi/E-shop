import React from "react";
import MenCategory from "../assets/images/buuga1.jpeg"
import KindCategory from "../assets/images/buuga2.jpeg"
import WomenCategory from "../assets/images/buuga3.jpeg"

const categories = [
    {
        title: "Men",
        image: MenCategory
    },
    {
        title: "Kind",
        image: KindCategory
    },
    {
        title: "Women",
        image: WomenCategory
    },
];

const CatogrySection = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-0 ml-28">
            {categories.map((category, index) => (
                <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105">
                    <img src={category.image} alt="" className="w-[250px] h-[200px] object-cover rounded-lg shadow-md"/>
                    <div className="absolute top-8 left-4">
                        <p className="text-xl font-bold">{category.title}</p>
                        <p className="text-gray-600">View All</p>
                    </div>
                    </div>
            ))}
        </div>
    )
}

export default CatogrySection;