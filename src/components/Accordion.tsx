import { Disclosure } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

const Accordion = () => {
  return (
    <div className="font-mona w-full max-w-xl border border-neutral-400  divide-y divide-neutral-400 text-neutral-400">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium">
              <span>How to Mint:</span>
              {open ? (
                <MinusIcon className="w-6 h-6" />
              ) : (
                <PlusIcon className="w-6 h-6" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pt-4 pb-2 text-sm">
              <ol className="list-decimal space-y-2">
                <li>Press "Connect Wallet" in the upper right corner</li>
                <li>Enter your Ordinal Bitcoin wallet address</li>
                <li>
                  Select your preferred delivery speed for your Ordinal. (This
                  affects price. Slower = cheaper, faster = more expensive)
                </li>
                <li>Press “Sign Message”</li>
                <li>Approve message with mint wallet</li>
                <li>Press “Mint Your MMCC Ordinal” to mint</li>
                <li>
                  Bask in the glory of immutable art on bitcoin and being early.
                </li>
              </ol>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium">
              <span>What is Mint Price:</span>
              {open ? (
                <MinusIcon className="w-6 h-6" />
              ) : (
                <PlusIcon className="w-6 h-6" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pt-4 pb-2 text-sm space-y-3">
              <p className="">
                If you hold an OG Meerkat{' '}
                <a
                  className="underline"
                  href="https://magiceden.io/marketplace/meerkat_millionaires_country_club"
                >
                  Meerkat Millionaires Country Club
                </a>{' '}
                mint price is 0.50 Sol + chosen tx speed fee
              </p>
              <p>
                If you do not hold a Meerkat, mint price 2.5 Sol + chosen tx
                speed fee
              </p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium">
              <span>Recommended Wallets:</span>
              {open ? (
                <MinusIcon className="w-6 h-6" />
              ) : (
                <PlusIcon className="w-6 h-6" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pt-4 pb-2 text-sm ">
              <p className="font-bold mb-4">
                You will need an Ordinal Bitcoin wallet that supports “Taproot”
                to receive your ordinal. Here are a few we recommend:
              </p>
              <div className="mt-6">
                <p className="font-bold">Browser plugin based options:</p>
                <ul className="list-none">
                  <li>
                    <a className="underline" href="https://unisat.io/download">
                      https://unisat.io/download
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline"
                      href="https://www.xverse.app/download"
                    >
                      {' '}
                      https://www.xverse.app/download
                    </a>{' '}
                    (also mobile app)
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <p className="font-bold">Browser based:</p>
                <a
                  className="underline"
                  href="https://ordinalswallet.com/create-wallet "
                >
                  https://ordinalswallet.com/create-wallet{' '}
                </a>
                <p>
                  *If setup asks for wallet type, make sure to use Taproot! Mint
                  site will not allow a non-taproot wallet.
                </p>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between items-center px-4 py-2 text-left text-sm font-medium">
              <span>All about Ordinals:</span>
              {open ? (
                <MinusIcon className="w-6 h-6" />
              ) : (
                <PlusIcon className="w-6 h-6" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pt-4 pb-2 text-sm ">
              <div className="mb-4">
                <a
                  className="underline"
                  href="https://mirror.xyz/nftsupply.eth/hoS9xkZIy0w_y7xR3bCO3CGKcrxn5pgdMLd3QvCVpJU"
                >
                  Bitcoin Ordinals For Dummies
                </a>
              </div>
              <div className="mb-4">
                <a
                  className="underline"
                  href="https://mirror.xyz/nftsupply.eth/_n6C2HZcoS8qsuU5QZ8utAyxv9ms9L_Hgr2lIwV_ETw"
                >
                  Bitcoin Ordinal Wallets
                </a>
              </div>
              <div className="mb-4">
                <a
                  className="underline"
                  href="https://mirror.xyz/nftsupply.eth/PF4F44THeW6DlD8-tydeNKPevAzFAr1kyfsHk-ym3Es"
                >
                  Bitcoin Ordinal Marketplaces
                </a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between items-center px-4 py-2 text-left text-sm font-medium">
              <span>What is the Bitcoin Gumball Machine?</span>
              {open ? (
                <MinusIcon className="w-6 h-6" />
              ) : (
                <PlusIcon className="w-6 h-6" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pt-4 pb-2 text-sm ">
              <a
                className="underline"
                href="https://magiceden.io/marketplace/meerkat_millionaires_country_club"
              >
                MeerKat Millionaires country Club | Magic Edin
              </a>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Accordion;
