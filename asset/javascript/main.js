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
    this.style.backgroundColor = '#f44336';
    salasd.style.backgroundColor = '#000';
    starter.style.backgroundColor = '#000';
}

salasd.onclick = function () {
    menuSalasd.style.display = 'block';
    menuPizza.style.display = 'none';
    menuStarter.style.display = 'none';
    this.style.backgroundColor = '#f44336';
    pizza.style.backgroundColor = '#000';
    starter.style.backgroundColor = '#000';
}

starter.onclick = function () {
    menuStarter.style.display = 'block';
    menuSalasd.style.display = 'none';
    menuPizza.style.display = 'none';
    this.style.backgroundColor = '#f44336';
    pizza.style.backgroundColor = '#000';
    salasd.style.backgroundColor = '#000';
}