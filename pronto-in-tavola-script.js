"use strict";

let currentDateTime = new Date();
document.getElementById('time-date').innerText = currentDateTime.toLocaleString();

/*//menu flash
let foodsDrinksArray = ['PIZZA', 'PASTA', 'WINE', 'BEER', 'MARGHERITA', 'NAPOLETANA', 'TIRAMISU', 
'FUNGHI', 'VONGOLE', 'TAGLIATELLE', 'ICE CREAM', 'EXPRESSO', 'PERONI'];

function menuFlash() {
    let foodSelector = Math.floor(Math.random() * foodsDrinksArray.length);
    return foodsDrinksArray[foodSelector];
  }
  
  let foodAndDrinks = document.getElementById('food-drinks');
  let originalFoodAndDrinksText = foodAndDrinks.innerHTML;
  let intervalId;
  let timeoutId;
  
  foodAndDrinks.addEventListener('mouseover', () => {
      timeoutId = setTimeout(() => {
          intervalId = setInterval(() => {
              let randomFood = menuFlash();
              foodAndDrinks.innerText = `*!${randomFood}!*`;
          }, 200);
      }, 200);
  });
  
  foodAndDrinks.addEventListener('mouseout', () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      foodAndDrinks.innerText = originalFoodAndDrinksText;
  });*/

//reveals menu
document.querySelector('#food-drinks').addEventListener('click', function() {
    let menu = document.querySelector('#menu');
    let foodDrinksButton = document.querySelector('#food-drinks');
  
    menu.classList.toggle('open');
  
    if (menu.classList.contains('open')) {
      foodDrinksButton.textContent = '*Close';
    } else {
      foodDrinksButton.textContent = '*Food & Drinks';
    }
  });

//reveals hours
document.querySelector('#hours').addEventListener('click', function() {
    let hoursGrid = document.querySelector('#hours-grid');
    let hoursButton = document.querySelector('#hours');
  
    hoursGrid.classList.toggle('open');
  
    if (hoursGrid.classList.contains('open')) {
      hoursButton.textContent = '*Close';
    } else {
      hoursButton.textContent = '*Hours';
    }
  });

  //reveals reservations
  document.querySelector('#reservations').addEventListener('click', function() {
    let reservationText = document.querySelector('#reservation-text');
    let reservationsButton = document.querySelector('#reservations');
  
    reservationText.classList.toggle('open');
  
    if (reservationText.classList.contains('open')) {
      reservationsButton.textContent = '*Close';

    } else {
      reservationsButton.textContent = '*Reservations';
    }
  });