import React from "react";

function Layout({ children }) {
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(, null, 2)}</pre> */}
      {children}
    </React.Fragment>
  );
}

export default Layout;
