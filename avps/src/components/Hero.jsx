import heroImage from '../assets/car.jpeg'; // Replace with your hero image path
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="lg:col-span-1">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <Link to={{pathname:'/VehicleList'}} state='Vehicle Inside'>
                                <div className="bg-blue-200 text-blue-900 p-4 rounded-lg shadow-lg">
                                    <p className="text-sm">Vehicles Inside</p>
                                    <p className="text-4xl font-bold">123</p>
                                </div>
                            </Link>
                            <Link to={{ pathname: '/VehicleList'}} state='Total Visit'>
                                <div className="bg-green-200 text-green-900 p-4 rounded-lg shadow-lg">
                                    <p className="text-sm">Total Visit</p>
                                    <p className="text-4xl font-bold">456</p>
                                </div>
                            </Link>
                            <Link to={{ pathname: '/VehicleList'}} state='Guests Inside'>
                                <div className="bg-yellow-200 text-yellow-900 p-4 rounded-lg shadow-lg">
                                    <p className="text-sm">Guests Inside</p>
                                    <p className="text-4xl font-bold">789</p>
                                </div>
                            </Link>
                        </div>
                        <Link to="/Registration">
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-gray-800 text-xl font-bold mb-8">
                                Admit Guest
                            </button>
                        </Link>
                        <h1 className="text-4xl font-bold mb-4">
                            Welcome to Our Website
                        </h1>
                        <p className="text-lg mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                        </p>
                        <a
                            href="/learn-more"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500"
                        >
                            Learn More
                        </a>
                    </div>
                    <div className="lg:col-span-1 mt-8 lg:mt-0">
                        <img src={heroImage} alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
