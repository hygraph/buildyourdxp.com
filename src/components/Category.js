import React from "react";
import { Link } from "gatsby";

import ToolGrid from "./ToolGrid";

export default function Category({ id, title, slug, tools = [] }) {
  return (
    <section key={id}>
      <div className="pt-12 pb-6 border-b border-gray-200 flex items-start md:items-center md:justify-between">
        <h2 className="text-2xl leading-8 font-semibold tracking-tight font-display text-gray-900 sm:leading-9">
          <a name={slug}>{title}</a>
        </h2>

        <Link
          to={`/components#${slug}`}
          className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out flex items-center"
        >
          <span className="mr-2">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
            </svg>
          </span>
          <span className="hidden md:inline">{title} and DXP?</span>
        </Link>
      </div>

      <div className="pt-6">
        <ToolGrid tools={tools} />
      </div>
    </section>
  );
}
