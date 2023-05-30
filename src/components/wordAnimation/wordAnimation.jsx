import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './wordanimation.css'

const WordAnimation = ({ word, translate,axis }) => {
  const letters = word.split('');
  const nameRef = useRef(null);


  useEffect(() => {
    gsap.to(nameRef.current.children, {
      y: 0,
      stagger: 0.05,
      duration: 0.1,
      ease: "bounce",
    });
  }, []);

  return (
    <div ref={nameRef} className='name__container'>
      {letters.map((letter, index) => (
        <span className="name" key={index} style={{  transform: `translate${axis}(${translate})`}}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default WordAnimation;

