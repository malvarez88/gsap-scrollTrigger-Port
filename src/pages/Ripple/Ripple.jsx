import React, { useEffect, useRef } from "react";
import "./ripple.css";
import $ from "jquery";
import "jquery.ripples";

const Ripple = () => {
  const ripplesRef = useRef(null);

  useEffect(() => {

    const current = ripplesRef.current

    $(current).ripples({
      resolution: 400,
      dropRadius: 20,
      perturbance: 0.4,
    });
    return () => {
      $(current).ripples("destroy");
    };
  });

  return (
    <div className="ripple" ref={ripplesRef}>
      <div className="inner__ripple">RIPPLE</div>
    </div>
  );
};

export default Ripple;
