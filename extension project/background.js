chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'timerEnd') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'images/icon128.png',
      title: 'Timer Alert',
      message: 'Your timer has ended!',
      priority: 2
    });
  }
});
