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
  const btnRef = useRef(null)
  const titleRef = useRef(null)


  useEffect(() => {
    gsap.to(titleRef.current, { opacity: 1, delay: 1});
    gsap.to(btnRef.current, { opacity: 1, delay: 1.2});
    gsap.to(leftRef.current, { opacity: 1, delay: 1.6});
    gsap.to(rigthRef.current, { opacity: 1, delay: 1.6 });

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
      <div className="ripple__header">
        <h1 className="ripple__title" ref={titleRef}>Coming Soon</h1>
        <a className="ripple__btn" href="https://www.marianodev.com" target="_blank" rel="noreferrer" ref={btnRef}><span>Portfolio</span></a>
      </div>

      <div className="inner__ripple">
        <span className="word__left" ref={leftRef}>
          MarianoDev
        </span>
        <span className="word__rigth" ref={rigthRef}>FrontendDeveloper </span>
      </div>
    </div>
  );
};

export default Ripple;
