import React, { useRef } from 'react';
import vid from './3183645841.mp4';

function PlayPauseVideo() {
  const vidRef = useRef(null);

  const playVideo = async () => {
    const isPlaying =
      vidRef.current.currentTime > 0 &&
      !vidRef.current.paused &&
      !vidRef.current.ended &&
      vidRef.current.readyState > vidRef.current.HAVE_CURRENT_DATA;
    if (!isPlaying) {
      try {
        await vidRef.current.play();
      } catch (e) {
        console.log(e);
      }
    }
  };
  const pauseVideo = () => {
    vidRef.current.pause();
  };
  return (
    <>
      <video
        ref={vidRef}
        autoPlay={true}
        style={{ width: '500px', height: '500px' }}
      >
        <source src={vid} type='video/mp4' />
      </video>
      <br />
      <button onClick={playVideo}>PLAY</button>
      <button onClick={pauseVideo}>Pause</button>
    </>
  );
}

export default PlayPauseVideo;
