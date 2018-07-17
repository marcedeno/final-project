var app = angular.module('myApp', []);

app.controller('finalProject', function($scope){
   //contenido

   var vm = this;
   vm.accederCuenta = false;

   // Fondo de Pantalla
   vm.img = 'img/wallpaper.jpg';
   vm.background = {'background-image': 'url('+ vm.img +')'};

   // Banner
   vm.banner = 'img/banner.jpg';
   vm.backgrount_banner = {'background-image': 'url('+ vm.banner +')'};

   vm.acceder = function(){
     vm.accederCuenta = true;
   };

   vm.iniciar = function(){
     console.log("Hola");
   };

   vm.registrarme = function(){
     console.log("Bienvenido");
   };

   vm.salir = function(){
     vm.accederCuenta = false;
   };

});
