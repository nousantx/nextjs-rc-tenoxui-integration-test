import React from "react";
import dynamic from "next/dynamic";

const Styler = dynamic(() => import("../../styles"), {
  ssr: false
});

const About = () => {
  return (
    <Styler>
      <div className="p-2rem tc-red"> Hello World!</div>
    </Styler>
  );
};

export default About;
