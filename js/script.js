let countDown = new Date("august 12 2023 12:00 am").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  //date defferente
  let dateDeff = countDown - dateNow; 

  //days
  let days = Math.floor(dateDeff / (1000 * 60 * 60 * 24));

  //hours
  let hours = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  //minute
  let minutes = Math.floor((dateDeff % (1000 * 60 * 60)) / (1000 * 60));
  
  //seconds
  let seconds = Math.floor((dateDeff % (1000 * 60)) / 1000);

  days < 10 ? document.querySelector(".days").innerHTML = `0${days}` : document.querySelector(".days").innerHTML = days;;
  hours < 10 ? document.querySelector(".hours").innerHTML = `0${hours}` : document.querySelector(".hours").innerHTML = hours;;
  minutes < 10 ? document.querySelector(".minutes").innerHTML = `0${minutes}` : document.querySelector(".minutes").innerHTML = minutes;;
  seconds < 10 ? document.querySelector(".seconds").innerHTML = `0${seconds}` : document.querySelector(".seconds").innerHTML = seconds;;

   if (dateDeff  <= 1000) {
    clearInterval(counter);
   }
}, 1000);
