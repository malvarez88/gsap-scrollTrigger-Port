import React, { useEffect, useRef } from "react";
import "./ripple.css";
import $ from "jquery";
import "jquery.ripples";
import { gsap } from "gsap";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";

const Ripple = () => {
  const ripplesRef = useRef(null);
  const leftRef = useRef(null);
  const rigthRef = useRef(null);

  useEffect(() => {
    gsap.to(leftRef.current, { opacity: 1, delay: 2 });
    gsap.to(rigthRef.current, { opacity: 1, delay: 1 });

    const current = ripplesRef.current;
    setTimeout(() => {
      $(current).ripples({
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.01,
      });
      return () => {
        $(current).ripples("destroy");
      };
    }, 2000);
  });

  return (
    <div className="ripple" ref={ripplesRef}>
      <AudioPlayer />
      <div className="inner__ripple">
        <span className="word__left" ref={leftRef}>
          Mariano Alvarez
        </span>
        {/* <span className="word__rigth" ref={rigthRef}>Frontend Developer </span> */}
      </div>
    </div>
  );
};

export default Ripple;
