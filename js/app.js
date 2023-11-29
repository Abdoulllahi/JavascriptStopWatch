/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: January 14, 2023 at 5:23:39 PM  CST
 * @ Last Modification Date: November 29, 2023 at 10:31:15 AM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

const startButton = document.querySelector('#start_button');
const stopButton = document.querySelector('#stop_button');
const resetButton = document.querySelector('#reset_button');
const milliSeconds = document.querySelector('#milli_seconds');
const seconds = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');

const unit = 9;
const tens = 99;
const cents = 999;

let myInterval;
let millisecondsValue = 0;

startButton.addEventListener('click', function () {
    clearInterval(myInterval);
    myInterval = setInterval(starter, 10); // Update interval to 10 milliseconds
});

stopButton.addEventListener('click', function () {
    clearInterval(myInterval);
});

resetButton.addEventListener('click', function () {
    clearInterval(myInterval);
    milliSeconds.classList.remove('has-text-danger');
    seconds.classList.remove('has-text-primary');
    milliSeconds.textContent = '000';
    seconds.textContent = '00';
    minutes.textContent = '00';
    millisecondsValue = 0;
});

const starter = function startTime() {
    milliSeconds.classList.add('has-text-danger');
    millisecondsValue += 10;

    const minutesValue = Math.floor(millisecondsValue / 60000);
    const secondsValue = Math.floor((millisecondsValue % 60000) / 1000);
    const millisecondsFormatted = (millisecondsValue % 1000).toString().padStart(3, '0');

    milliSeconds.textContent = millisecondsFormatted;
    seconds.textContent = secondsValue < 10 ? '0' + secondsValue : secondsValue;
    minutes.textContent = minutesValue < 10 ? '0' + minutesValue : minutesValue;

    if (millisecondsValue >= cents) {
        millisecondsValue = 0;
        seconds.classList.add('has-text-primary');
    }
};
