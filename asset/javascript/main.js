//Chọn menu:
var pizza = document.getElementById('pizza');
var salasd = document.getElementById('salasd');
var starter = document.getElementById('starter');
var menuPizza = document.getElementById('menu-pizza');
var menuSalasd = document.getElementById('menu-salasd');
var menuStarter = document.getElementById('menu-starter');

pizza.onclick = function () {
    menuPizza.style.display = null;
    menuSalasd.style.display = 'none';
    menuStarter.style.display = 'none';
}

salasd.onclick = function () {
    menuSalasd.style.display = null;
    menuPizza.style.display = 'none';
    menuStarter.style.display = 'none';
    pizza.style.backgroundColor = '#000 !important'
    this.style.backgroundColor = '#f44336 !important'
    pizza.style.backgroundColor = '#000 !important'
}

starter.onclick = function () {
    menuStarter.style.display = null;
    menuSalasd.style.display = 'none';
    menuPizza.style.display = 'none';
}