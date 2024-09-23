import { FaTwitter, FaFacebook } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 px-4 md-px-16 lg-px-24">
            <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                    <h3 className="text-xl font-semibold">e-Shop</h3>
                    <p className="mt-4">Your one-step fot all your needs.  with use and experience the best 
                        online shopping experience</p>
                </div>
                <div className="flex flex-col md:items-center">
                    <h4 className="text-lg font-semibold">Quick links</h4>
                    <ul className="mt-4  space-y-2">
                        <Link to={"/"} className="hover:underline"><li>Home</li></Link>
                        <Link to={"/sheko"} className="hover:underline"><li>Sheko</li></Link>
                        <Link to={"/"} className="hover:underline"><li>Contact</li></Link>
                        <Link to={"/"} className="hover:underline"><li>About</li></Link>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">Follow us</h4>
                    <div className="flex space-x-4 mt-4">
                        <a href="" className="hover:text-gray-400"><FaFacebook /></a>
                        <a href="" className="hover:text-gray-400"><FaTwitter /></a>
                        <a href="" className="hover:text-gray-400"><FaGithub /></a>
                        <a href="" className="hover:text-gray-400"><FaLinkedin /></a>
                    </div>
                    <form className="flex items-center justify-center mt-8">
                        <input type="email" placeholder="Enter Email" className="w-full p-2 
                        rounded-l-lg bg-gray-800 border border-gray-600" />
                        <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg border
                        border-gray-600">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="mt-8 border border-gray-700 pt-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2024 Books All rights reserved</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="" className="hover:underline">Privacy Policy</a>
                    <a href=""  className="hover:underline">Terms & condition</a>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;