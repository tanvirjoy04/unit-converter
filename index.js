const con = document.getElementById("con");
const line1 = document.getElementById("length-line");
const line2 = document.getElementById("vol-line");
const line3 = document.getElementById("mass-line");

con.addEventListener("click", function(){
  let digit = +document.getElementById("cal").value;
  let ft = digit * 3.281;
  let mtr = digit / 3.281; 
  line1.innerHTML = `${digit} meters = ${ft.toFixed(3)} feet | ${digit} feet = ${mtr.toFixed(3)} meters`;

  let ltr = digit * 0.264;
  let gln = digit / 0.264; 
  line2.innerHTML = `${digit} liters = ${ltr.toFixed(3)} gallons | ${digit} gallons = ${gln.toFixed(3)} liters`;

  let kg = digit * 2.204;
  let pnd = digit / 2.204; 
  line3.innerHTML = `${digit} kilos = ${kg.toFixed(3)} pounds | ${digit} pounds = ${pnd.toFixed(3)} kilos`;
});

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/