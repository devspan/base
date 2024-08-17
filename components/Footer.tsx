import Link from 'next/link';
import { FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10"
              src="/logo.png"
              alt="Rupaya"
            />
            <p className="text-gray-400 text-base">
              Empowering South Asia through decentralized finance.
            </p>
            <div className="flex space-x-6">
              <a href="https://twitter.com/rupayacoin" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://t.me/rupayacoin" className="text-gray-400 hover:text-white">
                <span className="sr-only">Telegram</span>
                <FaTelegram className="h-6 w-6" />
              </a>
              <a href="https://github.com/rupayaproject" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://discord.gg/rupaya" className="text-gray-400 hover:text-white">
                <span className="sr-only">Discord</span>
                <FaDiscord className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/defi" className="text-base text-gray-400 hover:text-white">
                      DeFi
                    </Link>
                  </li>
                  <li>
                    <Link href="/stablecoins" className="text-base text-gray-400 hover:text-white">
                      Stablecoins
                    </Link>
                  </li>
                  <li>
                    <Link href="/governance" className="text-base text-gray-400 hover:text-white">
                      Governance
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/faq" className="text-base text-gray-400 hover:text-white">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation" className="text-base text-gray-400 hover:text-white">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" className="text-base text-gray-400 hover:text-white">
                      Community
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-400 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="text-base text-gray-400 hover:text-white">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-base text-gray-400 hover:text-white">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-base text-gray-400 hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-base text-gray-400 hover:text-white">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 Rupaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;