import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default function Header(props) {
  const { title, subTitle, ctaTo, ctaText, coverImage } = props;

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/" aria-label="Home">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="w-12 h-12"
                    >
                      <clipPath id="a">
                        <path d="m0 0h512v512h-512z" />
                      </clipPath>
                      <clipPath id="b">
                        <path d="m0 0h512v512h-512z" />
                      </clipPath>
                      <g clip-path="url(#b)">
                        <path d="m0 0h512v512h-512z" fill="#fff" />
                        <g clip-path="url(#a)">
                          <rect
                            fill="#f5487f"
                            height="512"
                            rx="5"
                            width="512"
                          />
                          <g transform="matrix(0 -1 1 0 194.867 375.591)">
                            <path
                              d="m218.751 196.853h-206.313a12.436 12.436 0 0 1 -10.661-18.841l103.123-171.953a12.243 12.243 0 0 1 4.688-4.551 12.607 12.607 0 0 1 11.958 0 12.242 12.242 0 0 1 4.688 4.551l103.178 171.975a12.436 12.436 0 0 1 -10.661 18.842z"
                              fill="#fff"
                              transform="translate(2.546 2.474)"
                            />
                            <path
                              d="m118.112 4.972a10.047 10.047 0 0 0 -4.79 1.206 9.785 9.785 0 0 0 -3.743 3.63l-103.185 171.975a9.773 9.773 0 0 0 -1.445 5.143 10.138 10.138 0 0 0 4.824 8.511 9.785 9.785 0 0 0 5.154 1.411h206.373a9.785 9.785 0 0 0 5.154-1.411 10.138 10.138 0 0 0 4.824-8.511 9.785 9.785 0 0 0 -1.445-5.143l-103.187-171.975a9.8 9.8 0 0 0 -3.789-3.63 10.035 10.035 0 0 0 -4.79-1.206m0-4.972a14.791 14.791 0 0 1 12.8 7.248l103.185 171.975a14.928 14.928 0 0 1 -12.8 22.608h-206.325a14.928 14.928 0 0 1 -12.8-22.608l103.185-171.975a14.791 14.791 0 0 1 12.8-7.248z"
                              fill="#f5487f"
                            />
                          </g>
                          <g transform="matrix(0 1 -1 0 315.245 139.367)">
                            <path
                              d="m218.751 196.853h-206.313a12.436 12.436 0 0 1 -10.661-18.841l103.123-171.953a12.243 12.243 0 0 1 4.688-4.551 12.607 12.607 0 0 1 11.958 0 12.242 12.242 0 0 1 4.688 4.551l103.178 171.975a12.436 12.436 0 0 1 -10.661 18.842z"
                              fill="#fff"
                              transform="translate(2.546 2.474)"
                            />
                            <path
                              d="m118.112 4.972a10.047 10.047 0 0 0 -4.79 1.206 9.785 9.785 0 0 0 -3.743 3.63l-103.185 171.975a9.773 9.773 0 0 0 -1.445 5.143 10.138 10.138 0 0 0 4.824 8.511 9.785 9.785 0 0 0 5.154 1.411h206.373a9.785 9.785 0 0 0 5.154-1.411 10.138 10.138 0 0 0 4.824-8.511 9.785 9.785 0 0 0 -1.445-5.143l-103.187-171.975a9.8 9.8 0 0 0 -3.789-3.63 10.047 10.047 0 0 0 -4.79-1.206m0-4.972a14.791 14.791 0 0 1 12.8 7.248l103.185 171.975a14.928 14.928 0 0 1 -12.8 22.608h-206.325a14.928 14.928 0 0 1 -12.8-22.608l103.185-171.975a14.791 14.791 0 0 1 12.8-7.248z"
                              fill="#f5487f"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>

                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4">
                <Link
                  to="/about"
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  What is a DXP?
                </Link>

                <Link
                  to="/components"
                  className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  DXP Components
                </Link>

                <Link
                  to="/contribute"
                  className="ml-8 font-medium text-black hover:text-primary transition duration-150 ease-in-out"
                >
                  Contribute to this website
                </Link>
              </div>
            </nav>
          </div>

          {/* <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      --> */}
          {/* <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md">
                <div
                  className="rounded-lg bg-white shadow-xs overflow-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                >
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/img/logos/workflow-mark-on-white.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        aria-label="Close menu"
                      >
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Product
                    </a>
                    <a
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Company
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100 hover:text-pink-700 focus:outline-none focus:bg-gray-100 focus:text-pink-700 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

          <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                {title}
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {subTitle}
              </p>
              {ctaTo && (
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to={ctaTo}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      {ctaText || "Learn more"}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      {coverImage && (
        <div className="hidden md:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Img fluid={coverImage.localFile.childImageSharp.fluid} />
        </div>
      )}
    </div>
  );
}
