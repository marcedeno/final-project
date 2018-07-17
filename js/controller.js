var app = angular.module('myApp', []);

app.controller('finalProject', function($scope){
   //contenido

   var vm = this;
   vm.accederCuenta = false;
   vm.mostrarbanner = true;
   vm.categorias = false;

   // Fondo de Pantalla
   vm.img = 'img/wallpaper.jpg';
   vm.background = {'background-image': 'url('+ vm.img +')'};

   // Banner
   vm.banner = 'img/banner.jpg';
   vm.backgrount_banner = {'background-image': 'url('+ vm.banner +')'};

   vm.acceder = function(){
     vm.accederCuenta = true;
     vm.mostrarbanner = false;
   };

   vm.iniciar = function(){
     vm.accederCuenta = false;
     vm.mostrarbanner = false;
     vm.categorias = true;
   };

   vm.registrarme = function(){
     vm.accederCuenta = false;
     vm.mostrarbanner = false;
     vm.categorias = true;
   };

   vm.salir = function(){
     vm.mostrarbanner = true;
     vm.categorias = false;
     vm.accederCuenta = false;
   };

});
