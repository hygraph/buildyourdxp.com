import React from "react";

import SEO from "./SEO";

function Layout({ children, pageContext }) {
  return (
    <React.Fragment>
      <SEO {...pageContext} />
      {children}
    </React.Fragment>
  );
}

export default Layout;
