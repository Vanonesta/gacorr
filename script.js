const symbols = ["🍒", "🍋", "🍉", "🍇", "⭐", "🔔"];
const spinButton = document.getElementById("spinButton");
const message = document.getElementById("message");
const backgroundMusic = document.getElementById("backgroundMusic");
const toggleMusicButton = document.getElementById("toggleMusic");

// Slot Spin Functionality
spinButton.addEventListener("click", () => {
  const slot1 = document.getElementById("slot1");
  const slot2 = document.getElementById("slot2");
  const slot3 = document.getElementById("slot3");

  const result1 = symbols[Math.floor(Math.random() * symbols.length)];
  const result2 = symbols[Math.floor(Math.random() * symbols.length)];
  const result3 = symbols[Math.floor(Math.random() * symbols.length)];

  slot1.textContent = result1;
  slot2.textContent = result2;
  slot3.textContent = result3;

  if (result1 === result2 && result2 === result3) {
    message.textContent = "🎉 Jackpot! Anda menang! 🎉";
  } else {
    message.textContent = "Coba lagi!";
  }
});

// Music Toggle Functionality
toggleMusicButton.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    toggleMusicButton.textContent = "Matikan Musik";
  } else {
    backgroundMusic.pause();
    toggleMusicButton.textContent = "Hidupkan Musik";
  }
});