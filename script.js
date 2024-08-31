const alarmTimeInput = document.getElementById('alarm-time');
const setAlarmButton = document.getElementById('set-alarm');
const setAlarmFeedbackDiv = document.getElementById('set-alarm-feedback');
const alarmMessageDiv = document.getElementById('alarm-message');

let alarmTime = null;
let alarmSound = new Audio('alarm.mp3');

setAlarmButton.addEventListener('click', () => {
  alarmTime = alarmTimeInput.value;
  console.log(`Alarm disetel pada ${alarmTime}`);
  setAlarmFeedbackDiv.classList.add('show');
  setAlarmFeedbackDiv.textContent = 'Alarm disetel!';
  setTimeout(() => {
    setAlarmFeedbackDiv.classList.remove('show');
  }, 2000);
});

setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  if (currentTime === alarmTime) {
    alarmMessageDiv.classList.add('show');
    alarmMessageDiv.textContent = 'WAKTU BANGUN!';
    alarmSound.play();
    setTimeout(() => {
      alarmMessageDiv.classList.remove('show');
      alarmSound.pause();
      alarmSound.currentTime = 0;
    }, 5000);
  }
}, 1000);