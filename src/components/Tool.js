import React from "react";

export default function Tool({ id, name, url, formattedUrl, logo }) {
  return (
    <li
      key={id}
      className="bg-white col-span-1 focus:outline-none transition-all duration-75 ease-in-out inline-flex rounded-lg shadow"
    >
      <a
        href={`${url}?referrer=build-your-dxp`}
        target="_blank"
        rel="noreferrer"
        className="group w-full flex h-full items-center justify-between p-6 space-x-6 rounded-lg focus:outline-none border border-transparent focus:border-primary focus:shadow-outline-pink"
      >
        <img className="w-12 inline" src={logo.url} alt={name} />

        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm leading-5 font-medium truncate flex items-center group-hover:text-primary active:text-pink">
              {name}
            </h3>
          </div>
          <p className="mt-1 text-gray-500 text-sm leading-5 truncate">
            {formattedUrl}
          </p>
        </div>
      </a>
    </li>
  );
}
