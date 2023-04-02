import React from 'react';
import { NavLink } from 'react-router-dom';
import BitCoinIcon from '../assets/bitcoin_icon.svg';

const SignMessage = () => (
  <div>
    {/* Input */}
    <div className="relative mt-2 w-full bg-white rounded-lg mb-6">
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Enter your taproot bitcoin wallet address"
        // onChange={handleChange}
        className="w-full bg-white py-2 pl-2 pr-32 outline-none text-black rounded-lg"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-black">
        <img src={BitCoinIcon} alt="Bitcoin Logo" />
      </div>
    </div>
    {/* Input Fee */}
    <div className="mb-6">
      <select className="w-50 py-2 px-1 rounded-lg outline-none text-black bg-gray-300">
        <option value="">Select a fee for your delivery</option>
        <option value="">Option 1</option>
        <option value="">Option 2</option>
        <option value="">Option 3</option>
      </select>
    </div>
    {/* Sign Message BTN */}
    <div>
      <NavLink to="/mint-message">
        <button className="font-mona uppercase bg-[#191919] hover:bg-black border border-gray-700 py-2 px-6 rounded-2xl">
          Sign Message
        </button>
      </NavLink>
    </div>
  </div>
);

export default SignMessage;
