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

//Mobile:

var menuMobile = document.getElementById('menu-mobile');
var overFlow = document.getElementById ('over-flow');
var header =  document.getElementById('header');
var headerHeight = header.clientHeight;

//Đóng mở menu:
menuMobile.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
        overFlow.style.display = 'block';
    }else {
        header.style.height = null;
        overFlow.style.display = null;
    }
}

//Tự đọng đóng khi chọn menu:
var menuItems = document.querySelectorAll('#header .nav-lists li a');
for (var i = 0; i< menuItems.length ; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function () {
        header.style.height = null;
        overFlow.style.display = null;
    }
}

//Đóng menu khi bấm vào khoảng không:
overFlow.onclick = function () {
    this.style.display = 'none';
    header.style.height = null;
}








