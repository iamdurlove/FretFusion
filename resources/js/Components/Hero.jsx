import { Link } from "@inertiajs/react";
import "../../css/Hero.css";

const Hero = () => {
    return (
        <div className="hero text-white flex justify-center bg-base-200 bg-blend-overlay">
            <div className="hero-content text-center flex m-auto">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-bold max-md:text-4xl text-accent-content">
                        Best Musical Shop Of The Year!
                    </h1>
                    <p className="py-6 text-2xl max-md:text-lg text-accent-content">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <Link to="/shop" className="btn btn-primary ">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
