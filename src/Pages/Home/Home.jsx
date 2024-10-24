import Banner from '../../Components/Banner/Banner'
import WhyShouldJoin from '../../Components/WhyShouldJoin/WhyShouldJoin'
import MoreEvents from '../../Components/MoreEvents/MoreEvents'
import Services from '../Services/Services';
import Features from '../../Components/Features/Features';
const Home = () => {
    return (
        <>
        <div>
            <Banner />
            <WhyShouldJoin />
            <Services />
            <MoreEvents />
            <hr className="max-w-7xl mx-auto px-5" />
            <Features />
            

        </div>
        </>
    );
};

export default Home;