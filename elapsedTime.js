"use strict";
function elapsedTime(time, type = 'long') {
    // check for valid type argument
    if (type !== 'long' && type !== 'short') {
        return 'invalid type parameter';
    }
    // check for valid time argument
    if (time !== parseInt(time)) {
        return 'invalid time parameter';
    };

    // seconds are the lowest unit of time to be used
    // remove last 3 digits(milliseconds) if long value provided.
    let useTime = (type === 'long') ? Math.floor(time / 1000) : time;
    // current time in seconds
    const currentTime = Math.floor(Date.now() / 1000);
    // calc the absolute number of seconds between current time and time argument
    const SECONDS = Math.abs(currentTime - useTime);

    // labels for the time intervals. The 1st half is singular, the 2nd half is plural
    const intervalLabels = ['second', 'minute', 'hour', 'day', 'month', 'year', 'seconds', 'minutes', 'hours', 'days', 'months', 'years'];

    // array contains the absolute number of seconds, minutes, days,... between the current time the argument time
    const intervals = [SECONDS, // seconds
        (SECONDS - (SECONDS % 60)) / 60, // minutes
        (SECONDS - (SECONDS % 3600)) / 3600, // hours
        (SECONDS - (SECONDS % (3600 * 24))) / (3600 * 24), // days
        (SECONDS - (SECONDS % (3600 * 24 * 30))) / (3600 * 24 * 30), // months
        (SECONDS - (SECONDS % (3600 * 24 * 30 * 12))) / (3600 * 24 * 30 * 12) // years
    ];

    // loop thru the interval array backwards (start at end of array) finding the first entry with value > 0
    // this is the value to return
    // if the value is greated then 1, then go to the plural text values found in the "2nd half" of the interval label array
    for (let i = 5; i >= 0; i--) {
        let interval = intervals[i];
        if (interval > 0) {
            if (interval > 1) {
                i += 6; // use plural labels
            }
            return interval + " " + intervalLabels[i]
        }
    }
}

console.log(elapsedTime('yyyy', 'aaaa'));
console.log(elapsedTime(null));
console.log(elapsedTime(undefined));
console.log(elapsedTime(1259978339869, 'ab'));
console.log(elapsedTime(1259978339869, 123));
console.log(elapsedTime(1259978339869, null));
console.log(elapsedTime(1259978339869, undefined));

console.log(elapsedTime(1259978339869,'short'));
console.log(elapsedTime(1259978339869));

console.log(elapsedTime(1259978339869, 'long'));
console.log(elapsedTime(1259978339, 'short'));

console.log(elapsedTime(1559978339869, 'long'));
console.log(elapsedTime(1559978339, 'short'));

console.log(elapsedTime(1592178339869, 'long'));
console.log(elapsedTime(1592178339, 'short'));