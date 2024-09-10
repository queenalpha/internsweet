const names = ["Barchetta", "Rina", "Reyhan", "Zackwan", "Farabi", "Seno", "Caca", 
    "Fahri", "Zahra", "Raina", "Mei",  "Tian",  "Hurin","Hauzan", "Arya", "Eber", "Audy", "Rham", "Azel", "Dandi"];

let index = 0;

function changeGreeting() {
const greetingElement = document.getElementById('greeting');
greetingElement.textContent = `Hi, ${names[index]}`;
index = (index + 1) % names.length; 
}

setInterval(changeGreeting, 1000);

