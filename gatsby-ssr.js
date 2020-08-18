import React from "react";

import Layout from "./src/components/Layout";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("link", {
      key: "google-font-css",
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
    }),
  ]);
};

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
