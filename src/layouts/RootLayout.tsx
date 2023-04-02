import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import BackgroundBlobs from '../components/BackgroundBlobs';
import GumballIcon from '../assets/gumball.svg';
import Header from '../components/Header';

const RootLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-black bg-grid-pattern overflow-y-hidden">
      <BackgroundBlobs />
      <div className="flex flex-col min-h-screen z-0">
        {/* NavBar */}
        <Navbar />
        {/* Body */}
        <main className="flex flex-col grow">
          {/* Center Content */}
          <div className="mt-4 sm:mt-20">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 text-white gap-8">
                {/* Left Side */}
                <div className="p-4">
                  <div className="text-center lg:text-left">
                    <Header />
                    <div className="mt-4">
                      <Outlet />
                    </div>
                  </div>
                </div>
                {/* Right Side */}
                <div className="px-4 flex justify-center lg:justify-end font-mona">
                  <div className="flex flex-col justify-center items-center">
                    {/* Card */}
                    <Card />
                    {/* BitCoin Gumball Icon */}
                    <img
                      className="w-44 h-44"
                      src={GumballIcon}
                      alt="gumball logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

RootLayout.propTypes = {};

export default RootLayout;
