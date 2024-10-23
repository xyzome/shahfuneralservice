import compassionate from '../../assets/image/compassionate.svg';
import personalize from '../../assets/image/personalize.svg';
import community from '../../assets/image/community.svg';

const Features = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-36" data-aos="fade-up"
            data-aos-duration="1000">
            <div className='mb-14'>
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#211f54] mb-4 text-center">
                        Honoring Lives with Compassion and Care
                    </h1>

                </div>

                <p className="text-center text-lg mb-8 md:px-10 lg:px-32 xl:px-52">
                    We offer compassionate funeral services, personalized memorial planning, and community support to help you honor your loved ones during these difficult times.
                </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* Compassionate Care */}
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src={compassionate} alt="Compassionate Care" />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mb-2'>
                            Compassionate Care
                        </h1>

                        <p className='text-lg'>
                            Our dedicated team offers compassionate care and support, ensuring every detail is handled with respect and dignity.
                        </p>
                    </div>
                </div>

                {/* Personalized Memorial Planning */}
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src={personalize} alt="Compassionate Care" />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mb-2'>
                            Personalized Memorial Planning
                        </h1>

                        <p className='text-lg'>
                            We assist in planning personalized memorial services to celebrate the life and legacy of your loved ones.
                        </p>
                    </div>
                </div>

                {/* Community Support */}
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src={community} alt="Compassionate Care" />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mb-2'>
                            Personalized Memorial Planning
                        </h1>

                        <p className='text-lg'>
                            We assist in planning personalized memorial services to celebrate the life and legacy of your loved ones.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
