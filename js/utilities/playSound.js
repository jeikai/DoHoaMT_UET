import * as THREE from 'three'

const listener = new THREE.AudioListener();

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export function playMusic() {
    const musicSelection = getRandomInt(1, 9);
    console.log(musicSelection);

    const music = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();
    const audioPath = `../public/sounds/music/${musicSelection}.mp3`;
    audioLoader.load( audioPath, (buffer) => {
      music.setBuffer( buffer );
      music.setVolume(0.1);
      music.setLoop( true );
      music.play();
    });
}

export function playSfx(sfx) {
    const sfxSound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();
    const audioPath = `../assets/sounds/sfx/${sfx}.mp3`;
    audioLoader.load(audioPath, (buffer) => {
        sfxSound.setBuffer(buffer);
        sfxSound.setVolume(1.5);
        sfxSound.play();
    })
}