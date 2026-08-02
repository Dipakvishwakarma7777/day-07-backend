// Simple sound function using Web Audio API
function playSound(frequency) {
    const audio = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audio.createOscillator();
    osc.frequency.value = frequency;
    osc.type = "sine";

    const gain = audio.createGain();
    gain.gain.value = 0.2;

    osc.connect(gain);
    gain.connect(audio.destination);

    osc.start();
    setTimeout(() => osc.stop(), 300); // play for 0.3 seconds
}

// Piano note frequencies
const notes = {
    "C": 261.6,
    "C#": 277.1,
    "D": 293.7,
    "D#": 311.1,
    "E": 329.6,
    "F": 349.2,
    "F#": 370.0,
    "G": 392.0,
    "G#": 415.3,
    "A": 440.0,
    "A#": 466.2,
    "B": 493.8,
};

// Add click event on every key
const keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener("click", () => {
        const note = key.dataset.note;
        playSound(notes[note]);
    });
});
  