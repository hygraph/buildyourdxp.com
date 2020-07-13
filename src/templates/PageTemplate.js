import React from "react";

function PageTemplate(props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}

export default PageTemplate;
