import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid';

const Card = () => {
  return (
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
  );
};

export default Card;
