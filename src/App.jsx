import './App.css';
// import AudioPlayer from './components/audioPlayer/AudioPlayer';


import Hero from './pages/Hero/Hero';
import Ripple from './pages/Ripple/Ripple';
import Work from './pages/Work/Work';
import {CustomCursor} from './components/CustomCursor/CustomCursor'

function App() {
  return (
    <>
    {/* <Hero />
    <Work /> */}
    <CustomCursor />
    <Ripple />
    {/* <AudioPlayer /> */}
    </>
  );
}

export default App;
