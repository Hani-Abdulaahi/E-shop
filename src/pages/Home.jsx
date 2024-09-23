import React, { useEffect } from "react";
import { categories, MockData } from "../assets/MockData";
import eShop from "../assets/images/Buuga-Afmaal.jpg"
import InfoSection from "../component/InfoSection"
import CatogrySection from "../component/CatogrySection";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/ProductSlice";
import ProductCart from "../component/ProductCart";
import Shop from "../component/Shop"

useSelector
const Home = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    useEffect(() => {
        dispatch(setProducts(MockData))
    }, [])
    return (
        <div>
        <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
            <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
                <div className="w-full md:w-3/12">
                        <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">SHOP BY CATEGORIES</div>
                        <ul className="space-y-3 bg-gray-100 p-3 border">
                                {categories.map((category, index) => ( 
                                    <li key={index} className="flex items-center text-sm font-medium">
                                        <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                                        {category}
                                    </li>
                                ))}
                            </ul>
                            </div>
                        <div className="w-full md:9/12 mt-8 md:mt-0 h-96 relative">
                        <img src={eShop} alt="eshop" className="h-full w-full"/>
                        <div className="absolute top-44 ">
                    <button className="bg-[#FDDC7B] px-6 py-2 text-black  hover:bg-red-700
                    transform transition-transform duration-300 hover:scale-105 ml-[35em] rounded-xl">SHOP NOW</button>
                        </div>
                </div>
            </div>
            <InfoSection />
            <CatogrySection />

            <div className="container mx-auto py-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
                <div className="grid grid-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
                    {products.products.slice(0, 5).map(((products) => (
                        <ProductCart key={products.id} product={products} />
                    )))}
                </div>
            </div>
        </div>
        <Shop />
        </div>
    )
}

export default Home;