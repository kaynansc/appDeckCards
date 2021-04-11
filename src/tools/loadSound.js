import Sound from 'react-native-sound';

Sound.setCategory('Playback');

export default sound = new Sound('music.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});