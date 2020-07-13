import React from "react";

import ToolGrid from "./ToolGrid";

export default function Category({ id, title, tools = [] }) {
  return (
    <section key={id}>
      <div className="pt-12 pb-6 border-b border-gray-100">
        <h2 className="text-2xl leading-8 font-semibold tracking-tight font-display text-gray-900 sm:text-3xl sm:leading-9">
          {title}
        </h2>
      </div>

      <div className="pt-6">
        <ToolGrid tools={tools} />
      </div>
    </section>
  );
}
