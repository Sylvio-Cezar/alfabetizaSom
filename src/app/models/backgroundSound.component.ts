export class BackgroundSound {

    public static snd = new Audio();
    static isPlaying: boolean = false;
    static isOn: boolean = true;
    static icon: string;
  
    constructor() {
      BackgroundSound.snd.addEventListener('ended', BackgroundSound.soundIsFinished);
      BackgroundSound.icon = (BackgroundSound.isOn) ? 'volume-high-outline' : 'volume-mute-outline';
      this.setAndPlaySound('som_background.mp3')
    }
  
    static soundIsFinished() {
      BackgroundSound.isPlaying = false;
    }
  
    setAndPlaySound(filename: string) {
      if (!BackgroundSound.isPlaying) {
        BackgroundSound.snd.src = '../../assets/sounds/' + filename;
        BackgroundSound.snd.volume = 0.4;
        BackgroundSound.snd.loop = true;
        this.playSound();
      }
    }
  
    static pauseSound(){
      BackgroundSound.snd.pause();
    }
  
    static playSound(){
      BackgroundSound.snd.play();
    }
  
    static setSoundVolume(vol: number){
      BackgroundSound.snd.volume = vol;
    }
  
    static toggleBackgroundSound(){
      if (BackgroundSound.isOn) {
        BackgroundSound.icon = 'volume-mute-outline';
        BackgroundSound.pauseSound();
      } else {
        BackgroundSound.icon = 'volume-high-outline';
        BackgroundSound.playSound();
      }
  
      document.querySelectorAll('#volume-icon').
        forEach(icon => icon.setAttribute('name', BackgroundSound.icon));
      
      BackgroundSound.isOn = !BackgroundSound.isOn;
    }
  
    playSound() {
      if (!BackgroundSound.isPlaying) {
        BackgroundSound.isPlaying = true;
        BackgroundSound.snd.play().then(function(){}, function(){ BackgroundSound.soundIsFinished(); });
        parent.document.querySelectorAll('[class*="sound-btn"]').
          forEach(btn => btn.setAttribute('disabled', 'true'));
      }
    }
  }