import { NavLink, useParams } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const { id, image, title, description, price } = service;
    const { detailsId } = useParams();
    return (
        <div>
            <div className="mx-auto bg-white rounded-3xl shadow-2xl">
                <div className="px-8 pt-8 hover:scale-105">
                    <div className="h-56 mb-7">
                        <img src={image} alt="" className="w-full h-full object-cover rounded-3xl" />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-[#211f54] mb-2">
                            {title}
                        </h2>

                    </div>

                  
                </div>

              
            </div>
        </div>
    );
};

export default ServicesCard;