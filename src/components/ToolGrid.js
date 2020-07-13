import React from "react";

import Tool from "./Tool";

export default function ToolGrid({ tools }) {
  return (
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tools.map(Tool)}
    </ul>
  );
}
