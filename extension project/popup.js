let timerInterval;
let time = 0;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function updateDisplay() {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  timerDisplay.textContent = 
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const customTimeInput = document.getElementById('customTime');

function startTimer() {
  if (timerInterval) return;
  const customTime = parseInt(customTimeInput.value, 10);
  if (!isNaN(customTime) && customTime > 0) {
    time = customTime;
    chrome.storage.local.set({ time });
    customTimeInput.value = '';  // Clear the input after setting time
  }
  timerInterval = setInterval(() => {
    time--;
    chrome.storage.local.set({ time });
    updateDisplay();

    if (time <= 0) {
      clearInterval(timerInterval);
      chrome.alarms.create('timerEnd', { when: Date.now() });
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  time = 0;
  chrome.storage.local.set({ time });
  updateDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Restore timer state from storage
chrome.storage.local.get(['time'], (result) => {
  if (result.time) {
    time = result.time;
    updateDisplay();
  }
});

updateDisplay();
