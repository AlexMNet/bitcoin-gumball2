import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="font-mona">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex py-8 justify-between items-center">
          <div>
            <NavLink to="/">
              <h1 className="text-white text-xl sm:text-3xl uppercase font-bold">
                Project Logo
              </h1>
            </NavLink>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <NavLink to="/sign-message">
              <button
                type="button"
                className="uppercase rounded-full bg-transparent font-normal px-2.5 py-1 sm:px-6 sm:py-2 text-xs sm:text-sm hover:text-black text-white shadow-sm ring-1 ring-inset ring-white hover:bg-gray-50"
              >
                Connect Wallet
              </button>
            </NavLink>

            <div className="hidden sm:inline-flex w-[1px] h-6 bg-white"></div>
            <button>
              <Cog6ToothIcon className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
