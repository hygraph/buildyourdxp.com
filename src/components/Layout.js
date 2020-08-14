import React from "react";

import SEO from "./SEO";
import Footer from "./Footer";

function Layout({ children, pageContext }) {
  return (
    <React.Fragment>
      <SEO {...pageContext} />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
