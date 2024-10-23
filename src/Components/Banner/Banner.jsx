import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 pt-8 md:pt-16" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="800"
        data-aos-offset="0">
            <div>
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold text-center leading-tight text-[#211f54] mb-4">
                    Shah Funeral <br /> Service
                </h1>

                <p className="text-center text-lg mb-8 lg:px-36 xl:px-64">
                    We take care of all aspects of a funeral ceremony from the hearse, to the cremation, to the freezer coffins. We plan beautiful floral tributes for the funeral.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4">
                    <a rel='+918657655887' className='bg-[#4845e3] py-3 sm:py-5 sm:px-7 rounded-md text-white font-medium text-center w-full sm:w-auto'>
                        <button className="text-xl">
                            Call Us Now
                        </button>
                    </a>

                    <NavLink to='/' className='bg-[#ed4458] py-3 sm:py-5 sm:px-7 rounded-md text-white font-medium text-center w-full sm:w-auto'>
                        <button className="text-xl">
                            Explore More
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;