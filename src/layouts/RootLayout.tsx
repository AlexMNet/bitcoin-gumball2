import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid';
import GumballIcon from '../assets/gumball.svg';

const RootLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-black bg-grid-pattern overflow-y-hidden">
      <div className="fixed w-72 h-72 bg-[#ff9900] rounded-full filter blur-3xl top-[18%] opacity-75 -left-44 "></div>
      <div className="fixed w-24 h-24 bg-[#ff9900] rounded-full filter blur-2xl top-[18%] right-[30%] "></div>
      <div className="fixed w-44 h-44 bg-[#ff9900] rounded-full filter blur-3xl -bottom-24 opacity-75 right-1/2 "></div>
      <div className="flex flex-col min-h-screen z-0">
        {/* NavBar */}
        <Navbar />
        {/* Body */}
        <main className="flex flex-col grow">
          <div className="mt-4 sm:mt-20">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 text-white gap-8">
                {/* Left Side */}
                <div className="p-4">
                  <div className="mb-4">
                    <h3 className="font-monaBold text-base sm:text-xl mb-3">
                      <span className="text-amber-600">Bitcoin</span>
                      GumballMachine///$SOL-{'>'}$BTC
                    </h3>
                    <h1 className="font-mona text-6xl font-bold mb-3">
                      The Project Name
                    </h1>
                    <p className="font-monaLight text-gray-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Excepturi cum expedita consequuntur numquam non aut porro.
                      Vel explicabo mollitia omnis rem minima minus aliquam
                      eveniet!
                    </p>
                  </div>
                  <div>
                    <Outlet />
                  </div>
                </div>
                {/* Right Side */}
                <div className=" border-pink-50 px-4 flex justify-center lg:justify-end font-mona">
                  <div className="flex flex-col justify-center items-center">
                    {/* Card */}
                    <div className="w-[340px] rounded-3xl border-2 border-neutral-500 bg-[#1F1E1E] p-6">
                      <div className="flex justify-between  mb-6">
                        <EllipsisHorizontalCircleIcon className="w-8 h-8" />
                        <EllipsisHorizontalCircleIcon className="w-8 h-8" />
                      </div>
                      <div className="mb-6 h-64 w-full relative">
                        <div className="absolute w-full h-full border rounded-xl -top-3 bottom-0 left-3 right-0"></div>
                        <div className="absolute w-full h-full bg-[#ff9900] rounded-xl top-0 bottom-0 left-0 right-0">
                          {/* <img src="" alt="" /> */}
                        </div>
                      </div>

                      <div className="">
                        <h4 className="text-2xl mb-2">The Project Name</h4>
                        <p className="text-base">Mint Price: 3.5 SOL + TX</p>
                        <div className="mt-6 flex justify-center">
                          <button
                            type="button"
                            className="uppercase w-full rounded-2xl bg-black py-6 text-lg font-normal text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                          >
                            Mint Ordinal
                          </button>
                        </div>
                      </div>
                    </div>
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
