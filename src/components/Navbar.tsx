import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import { useNavHandlers } from "../utils/navfunc";

interface navlinks {
  name: string;
  path: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { handleContactUs} = useNavHandlers();

  const navigationLinks: navlinks[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white fixed w-full z-10 top-0 start-0 border-b border-gray-200 font-primary font-bold">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/nyamedua_img/nyamedua_grupp_logo.png" className="h-8" alt="Nyamedua Grupp Logo" />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button label="Contact Us" onClick={handleContactUs} />
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-l md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navigationLinks.map((link: navlinks) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => {setIsMenuOpen(false);
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                                }} // closes menu on nav click
                  className={({ isActive }: { isActive: boolean }) =>
                    `block py-2 pl-3 pr-4 relative group link-underline transition-colors duration-300 ${
                      isActive
                        ? "text-secondary"
                        : "text-primarycolor hover:text-secondary"
                    }`
                  }
                  aria-current={link.path === window.location.pathname ? 'page' : undefined}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
