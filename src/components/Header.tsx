import { SiTwitter, SiDiscord } from 'react-icons/si';
import { TbWorldWww } from 'react-icons/tb';

const Header = () => {
  return (
    <>
      <h3 className="font-monaBold text-base sm:text-xl mb-3">
        <span className="text-amber-600">Bitcoin</span>
        GumballMachine///$SOL-{'>'}$BTC
      </h3>
      <h1 className="font-mona text-6xl font-bold mb-3">The Project Name</h1>
      {/* Social Media Links */}
      <div className="flex flex-row gap-3 mb-3 justify-center lg:justify-start">
        <a href="https://twitter.com/" target="_blank">
          <SiTwitter className=" w-6 h-6 text-gray-500 cursor-pointer hover:brightness-125" />
        </a>
        <a href="https://discord.com/" target="_blank">
          <SiDiscord className=" w-6 h-6 text-gray-500 cursor-pointer hover:brightness-125" />
        </a>
        <a href="#" target="_blank">
          <TbWorldWww className=" w-6 h-6 text-gray-500 cursor-pointer hover:brightness-125" />
        </a>
      </div>
      <p className="font-monaLight text-gray-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi cum
        expedita consequuntur numquam non aut porro. Vel explicabo mollitia
        omnis rem minima minus aliquam eveniet!
      </p>
    </>
  );
};

export default Header;
