/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: January 14, 2023 at 5:23:39 PM  CST
 * @ Last Modification Date: November 29, 2023 at 10:25:19 AM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

const startButton = document.querySelector('#start_button');
const stopButton = document.querySelector('#stop_button');
const resetButton = document.querySelector('#reset_button');
const milliSeconds = document.querySelector('#milli_seconds');
const seconds = document.querySelector('#seconds');

const unit = 9;
const tens = 99;
const cents = 999;
let myInterval;

let tierces = 0;
let second = 0;

startButton.addEventListener('click', function () {
    clearInterval(myInterval);
    myInterval = setInterval(starter, 10); // Change the interval to a more reasonable value (e.g., 10)
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
    tierces = 0;
    second = 0;
});

const starter = function startTime() {
    milliSeconds.classList.add('has-text-danger');
    tierces += 1;
    if (tierces < unit) {
        milliSeconds.textContent = '00' + tierces;
    } else if (tierces < tens) {
        milliSeconds.textContent = '0' + tierces;
    } else {
        milliSeconds.textContent = tierces;
    }

    if (tierces > cents) {
        tierces = 0;
        seconds.classList.add('has-text-primary');
        second += 1;
        seconds.textContent = second < 10 ? '0' + second : second; // Ensure two-digit format
    }
};
