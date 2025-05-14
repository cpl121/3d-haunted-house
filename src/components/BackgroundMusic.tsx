import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

const BackgroundMusic = () => {
  const { camera } = useThree();
  const soundRef = useRef<THREE.Audio>(null);

  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.Audio(listener);
    soundRef.current = sound;

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('/audio/mystery-horror.mp3', (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.3);
    });

    return () => {
      camera.remove(listener);
    };
  }, [camera]);

  useEffect(() => {
    const playMusic = () => {
      if (soundRef.current && !soundRef.current.isPlaying) {
        soundRef.current.play();
      }
    };

    window.addEventListener('click', playMusic);
    window.addEventListener('touchstart', playMusic);

    return () => {
      window.removeEventListener('click', playMusic);
      window.removeEventListener('touchstart', playMusic);
    };
  }, []);

  return null;
};

export default BackgroundMusic;
