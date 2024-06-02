# Coding Timer Extension

A Chrome extension to help manage time effectively while coding, studying for exams, or any other online activities. This extension allows you to set a countdown timer, providing notifications when the timer ends.

## Features

- **Customizable Timer**: Set your own time intervals for the countdown.
- **Easy Controls**: Start, pause, and reset the timer with ease.
- **Persistent State**: Timer state persists across popup closures.
- **Notifications**: Receive a notification when the timer ends.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/coding-timer-extension.git
    cd coding-timer-extension
    ```

2. **Load the extension in Chrome**:

    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable "Developer mode" by toggling the switch in the top right corner.
    - Click "Load unpacked" and select the directory where you cloned the repository.

## Usage

1. **Open the Extension**:
    - Click on the extension icon in the Chrome toolbar to open the popup.

2. **Set a Timer**:
    - Enter the desired time in seconds in the input field.
    - Click the "Start" button to begin the countdown.

3. **Control the Timer**:
    - Use the "Pause" button to pause the countdown.
    - Use the "Reset" button to reset the timer to zero.

4. **Notifications**:
    - When the countdown reaches zero, you will receive a notification alert.

## Project Structure

```plaintext
coding-timer-extension/
│
├── manifest.json       # Chrome extension manifest file
├── popup.html          # HTML file for the extension popup
├── popup.js            # JavaScript file for the extension popup
├── background.js       # JavaScript file for background scripts
├── images/             # Directory for extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md           # Project README file
