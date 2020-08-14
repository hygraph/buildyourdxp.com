import React from "react";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="hidden md:block max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <Link
              to="/about"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              About Build Your DXP
            </Link>
          </div>

          <div className="px-5 py-2">
            <Link
              to="/components"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              DXP Components
            </Link>
          </div>

          <div className="px-5 py-2">
            <Link
              to="/contribute"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Contribute
            </Link>
          </div>
        </nav>

        <div className="mt-8">
          <p className="text-center text-base leading-6 text-gray-400">
            &copy; 2020 &mdash; Maintained by{" "}
            <a href="https://graphcms.com">GraphCMS</a>
          </p>
        </div>
      </div>
    </div>
  );
}
