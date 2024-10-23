import { BsPeopleFill } from "react-icons/bs";
import { PiUserFill } from "react-icons/pi";
import img1 from '../../images/wsj-1.jpg'
import img2 from '../../images/wsj-2.jpg'
import img3 from '../../images/wsj-3.jpg'
import img4 from '../../images/wsj-4.jpg'
import img5 from '../../images/wsj-5.jpg'
const WhyShouldJoin = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-36">
            <div className="flex flex-col xl:flex-row justify-between gap-14">
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#211f54] mb-8">
                            Compassionate Funeral Services
                        </h1>

                        <p className="text-lg mb-8">
                            At Shah Funeral Service, we understand the significance of honoring a loved one’s memory. Our team is dedicated to providing compassionate and personalized funeral services to meet your family’s needs.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5">
                            <div className=" w-16 h-16 rounded-2xl flex justify-center items-center">
                                <BsPeopleFill className="text-3xl sm:text-4xl text-gray-600" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-1">
                                    Dedicated Support Team
                                </h3>

                                <p className="text-lg">
                                    Our caring staff is available 24/7 to assist you during this difficult time, ensuring that all arrangements are handled smoothly.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className=" w-16 h-16 rounded-2xl flex justify-center items-center">
                                <PiUserFill className="text-3xl sm:text-4xl text-gray-600" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-1">
                                    Personalized Services
                                </h3>

                                <p className="text-lg">
                                    We offer a range of customized services, from traditional funerals to cremations, ensuring that every farewell is meaningful.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="2500">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="h-60 w-full rounded-3xl">
                                <img src={img1} alt="Funeral Image 1" className="w-full h-full rounded-3xl object-cover hover:scale-105" />
                            </div>

                            <div className="h-60 w-full rounded-3xl">
                                <img src={img2} alt="Funeral Image 2" className="w-full h-full rounded-3xl object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="h-60 xl:w-40 rounded-3xl">
                                <img src={img4} alt="Funeral Image 4" className="w-full h-full rounded-3xl object-cover" />
                            </div>
                            <div className="h-60 xl:w-80 rounded-3xl">
                                <img src={img3} alt="Funeral Image 4" className="w-full h-full rounded-3xl object-cover" />
                            </div>
                            <div className="h-60 xl:w-40 rounded-3xl">
                                <img src={img5} alt="Funeral Image 5" className="w-full h-full rounded-3xl object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyShouldJoin;
