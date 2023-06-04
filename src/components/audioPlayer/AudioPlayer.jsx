import React, { useState,useEffect } from 'react';
import { Howl } from 'howler';
import './audioplayer.css'
import soundFile from '../../assets/sound.mp3';
import pause from '../../assets/pause.png'
import play from '../../assets/play.png'

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [sound, setSound] = useState(null);
    const [buttonImage, setButtonImage] = useState(play);
  
    useEffect(() => {
      const newSound = new Howl({
        src: [soundFile],
        loop: true,
        autoplay: true
      });
      setSound(newSound);
      return () => {
        newSound.stop();
      };
    }, []);
  
    const togglePlay = () => {
      if (isPlaying) {
        sound.pause();
        setButtonImage(play);
      } else {
        sound.play();
        setButtonImage(pause)
      }
      setIsPlaying(!isPlaying);
    };
  
    return (
      <div className='audio__player'>
          <button onClick={togglePlay} className='audio__btn'>
        <img src={buttonImage} alt={isPlaying ? 'Pausar' : 'Reproducir'}  className='audio__img'/>
      </button>
      </div>
    );
  };

export default AudioPlayer;