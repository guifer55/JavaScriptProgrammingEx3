/*JavaScript Ex 3
Dates*/


let registration = new Date(2020, 0, 7, 8, 25);

console.log(registration);
console.log(`Year: ${registration.getFullYear()}`);
console.log(`Month: ${registration.getMonth()}`);
console.log(`Day of Week: ${registration.getDay()}`);
console.log(`Date: ${registration.getDate()}`);
console.log(`Hours: ${registration.getHours()}`);
console.log(`Minutes: ${registration.getMinutes()}`);
console.log(`Seconds: ${registration.getSeconds()}`);

registration.setFullYear(1999);
console.log(`${registration.toDateString()} ${registration.toTimeString()}`); //toTimeString puts in the proper time zone
console.log(registration.toDateString());

/* Begin Exercise */

let birthDate = new Date(1982, 7, 11, 11, 28);
console.log(birthDate);

console.log(`What is the date 1 billion seconds from my birthday and how old am
I or will be that year.`);

let seconds = 1000000000;


let days =  seconds / 86400;
console.log(Math.round(days));

//expression below gives the days of the month plus the variable
let nextDate = birthDate.getDate() + days;

console.log(` next date ${nextDate}`);


//get date just gets the day, remen=ber
let newDate = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
console.log(` new date yall ${newDate}`);

//
newDate.setDate(nextDate);
console.log(newDate);

let age = newDate.getFullYear() - birthDate.getFullYear();

console.log(`My age of year ${newDate.getFullYear()} is or will be ${age}`);








