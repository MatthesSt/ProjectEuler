// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

let monthStarts = [];
const MONTHS = [
  31, //Januar,
  28, //Februar,
  31, //März,
  30, //April,
  31, //Mai,
  30, //Juni,
  31, //Juli,
  31, //August,
  30, //Sepember,
  31, //Oktober,
  30, //November,
  31, //Dezember,
];
let currentMonthIndex = 0;
let currentDay = 366; // 1.1.1901
let sundays = 0;
for (let currentYear = 1901; currentYear < 2001; currentYear++) {
  for (let month of MONTHS) {
    if (currentYear % 4 == 0 && month == 28) {
      currentDay += 29;
    } else {
      currentDay += month;
    }
    if (currentDay % 7 == 0) {
      sundays++;
    }
  }
}

console.log(sundays);
