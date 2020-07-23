import React from "react";
import { Link } from "gatsby";

import ToolGrid from "./ToolGrid";

export default function Category({ id, title, slug, tools = [] }) {
  return (
    <section key={id}>
      <div className="pt-12 pb-6 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-2xl leading-8 font-semibold tracking-tight font-display text-gray-900 sm:leading-9">
          <a name={slug}>{title}</a>
        </h2>

        <Link
          to={`/components#${slug}`}
          className="ml-8 text-sm font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
        >
          {title} and DXP?
        </Link>
      </div>

      <div className="pt-6">
        <ToolGrid tools={tools} />
      </div>
    </section>
  );
}
