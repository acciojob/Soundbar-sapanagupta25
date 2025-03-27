//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3']; // List of sound file names (without extension)

const buttonsContainer = document.getElementById('buttons');

// Function to stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}

// Create buttons for each sound
sounds.forEach(sound => {
  // Create an audio element for each sound
  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);

  // Create button for each sound
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds(); // Stop any currently playing sound
    audio.play(); // Play selected sound
  });

  buttonsContainer.appendChild(btn);
});

// Create STOP button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'STOP';

stopBtn.addEventListener('click', stopSounds);

buttonsContainer.appendChild(stopBtn);
