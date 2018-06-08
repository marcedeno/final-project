var app = angular.module('myApp', []);

app.controller('finalProject', function($scope){
   //contenido

   var vm = this;

   vm.img = 'img/wallpaper.jpg';
   vm.background = {'background-image': 'url('+ vm.img +')'};

   // Banner
   vm.banner = 'img/banner.jpg';
   vm.backgrount_banner = {'background-image': 'url('+ vm.banner +')'};

});
