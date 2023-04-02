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
        <Navbar />
        <main className="flex flex-col grow">
          {/* Center Content */}
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 text-white">
                <div className="md:mt-12">
                  <Header />
                  <div className="mt-4">
                    {/* Outlet is where the Accordion, SignMessage or MintMessage is rendered by the router in App.tsx */}
                    <Outlet />
                  </div>
                </div>
                <div className="mb-12 lg:mb-0 flex justify-center lg:justify-end">
                  <div>
                    <Card />
                    <img
                      className="w-44 h-44 mx-auto"
                      src={GumballIcon}
                      alt="gumball logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

RootLayout.propTypes = {};

export default RootLayout;
