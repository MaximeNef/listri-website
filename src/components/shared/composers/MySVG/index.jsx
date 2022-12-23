import React from "react";

function MySVG({ svg }) {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default MySVG;
