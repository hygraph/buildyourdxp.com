import React from "react";

import SEO from "./SEO";
import Footer from "./Footer";

function Layout({ children, pageContext: { page } }) {
  return (
    <React.Fragment>
      <SEO {...page} />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
