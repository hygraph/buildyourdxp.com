import React from "react";

import Tool from "./Tool";

export default function ToolGrid({ tools }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map(Tool)}
    </ul>
  );
}
