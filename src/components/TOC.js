import React from "react";

export default function TOC({ items }) {
  return (
    <ul>
      {items.map(({ title, slug }) => (
        <li key={slug}>
          <a
            aria-label={title}
            href={`#${slug}`}
            className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-transparent hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 transition ease-in-out duration-150"
          >
            <span className="truncate">{title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
