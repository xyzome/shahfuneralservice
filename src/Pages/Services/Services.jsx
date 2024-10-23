import { useLoaderData } from "react-router-dom";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import service1 from '../../../src/images/service-1.jpg'
const Services = () => {

    const servicesData = useLoaderData();

    return (
        <div data-aos="fade-up"
        data-aos-duration="1000">
            <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-36">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#211f54] mb-4 text-center md:px-10">
                        Shah Funerla Service
                    </h1>

                    <p className="text-center text-lg mb-8 md:px-10 lg:px-32 xl:px-64">
                       We provide wide range of funeral services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        servicesData.map(service => <ServicesCard key={service.id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;