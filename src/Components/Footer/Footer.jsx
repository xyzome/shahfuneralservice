import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { IoMdMicrophone } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png'
const Footer = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-5 py-12 lg:py-20 xl:py-28 flex flex-col xl:flex-row xl:gap-24 gap-10" data-aos="fade-up"
        data-aos-duration="1000">
                <div className="">
                    <NavLink to='/' className='text-[40px] font-bold flex items-center mb-3'>
                        <img src={logo} className="text-[#e34545] text-5xl" />
                       
                    </NavLink>

                    <p className="text-lg md:w-[600px]">
                        Comprehensive funeral planning and care, offering compassionate support to honor your loved ones with dignity and respect.
                    </p>
                </div>

                <div >
                    <h2 className="text-black text-2xl font-semibold mb-4">
                        Follow Us On
                    </h2>

                    <div className="flex gap-4">
                        
                        <a href="https://www.instagram.com/shahambulanceservice24x7/" className="bg-[#f1f1f1] w-20 h-20 rounded-2xl flex justify-center items-center cursor-pointer hover:shadow-2xl">
                            <BsInstagram className="text-rose-400 text-3xl" />
                        </a>

                        <a href="https://www.youtube.com/@ShahAmbulanceService" className="bg-[#f1f1f1] w-20 h-20 rounded-2xl flex justify-center items-center cursor-pointer hover:shadow-2xl">
                            <BsYoutube className="text-[#e34545] text-3xl" />
                        </a>
                    </div>
                </div>
            </div>

            <hr />

            <div className="max-w-7xl mx-auto px-5 py-5 flex justify-center gap-24" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0">
                <p className="text-lg">
                    Developed by <a href="https://zome-tech.vercel.app/" className="underline text-blue-700" target="_blank">zome</a> 
                </p>
            </div>
        </div>
    );
};

export default Footer;