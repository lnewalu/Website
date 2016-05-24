/* global angular */
var app = angular.module ('myapp', [
    'ngRoute'
    ]);
    
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/coding", {templateUrl: "partials/coding.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/emails", {templateUrl: "partials/emails.html", controller: "PageCtrl"})
    .when("/Gx3", {templateUrl: "partials/Gx3.html", controller: "PageCtrl"})
    .when("/infusion52", {templateUrl: "partials/infusion52.html", controller: "PageCtrl"})
    .when("/print", {templateUrl: "partials/print.html", controller: "PageCtrl"})
    .when("/websites", {templateUrl: "partials/websites.html", controller: "PageCtrl"})
    .when("/funtimes", {templateUrl: "partials/funtimes.html", controller: "PageCtrl"})
    
    .when('/aodetails/:itemId', {templateUrl: "partials/aodetails.html", controller: "AODetailsController"})
    .when('/jfdetails/:itemId', {templateUrl: "partials/jfdetails.html", controller: "JFDetailsController"})
    .when('/mpdetails/:itemId', {templateUrl: "partials/mpdetails.html", controller: "MPDetailsController"})
    
    .when('/printwebdetails/:itemId', {templateUrl: "partials/printwebdetails.html", controller: "PrintWebDetailsController"})
    .when('/hsnwebdetails/:itemId', {templateUrl: "partials/hsnwebdetails.html", controller: "HSNWebDetailsController"})
    .when('/intwebdetails/:itemId', {templateUrl: "partials/intwebdetails.html", controller: "INTWebDetailsController"})
    .when('/miswebdetails/:itemId', {templateUrl: "partials/miswebdetails.html", controller: "MisWebDetailsController"})
    
    .when('/lnprintdetails/:itemId', {templateUrl: "partials/lnprintdetails.html", controller: "LNPrintDetailsController"})
    .when('/nisrtprintdetails/:itemId', {templateUrl: "partials/nisrtprintdetails.html", controller: "NISRTPrintDetailsController"})
    .when('/hdprintdetails/:itemId', {templateUrl: "partials/hdprintdetails.html", controller: "HDPrintDetailsController"})
    .when('/intprintdetails/:itemId', {templateUrl: "partials/intprintdetails.html", controller: "INTPrintDetailsController"})
    
  /*$locationProvider.html5Mode ({
      enabled: true,
      requireBase: false
    }); */  
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  //console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

//These will bring in the data for the Email Promotions examples.
//America Online
app.controller('AOEmailController', function AOEmailController($scope, $http) {
    $http.get('Content/data/ao_email_data.json').success(function(data){
        $scope.aoemailcampaign = data;
   });  
});
app.controller('AODetailsController', function AODetailsController($scope, $http, $routeParams) {
    $http.get('Content/data/ao_email_data.json').success(function(data){
        $scope.aoemailcampaign = data;
        $scope.whichItem = $routeParams.itemId;
   });  
});
//JobFusion.com
app.controller('JFEmailController', function JFEmailController($scope, $http) {
    $http.get('Content/data/jf_email_data.json').success(function(data){
        $scope.jfemailcampaign = data;
   });  
});
app.controller('JFDetailsController', function JFDetailsController($scope, $http, $routeParams) {
    $http.get('Content/data/jf_email_data.json').success(function(data){
        $scope.jfemailcampaign = data;
        $scope.whichItem = $routeParams.itemId;
   });  
});
//MyPoints.com
app.controller('MPEmailController', function MPEmailController($scope, $http) {
    $http.get('Content/data/mp_email_data.json').success(function(data){
        $scope.mpemailcampaign = data;
   });  
});
app.controller('MPDetailsController', function MPDetailsController($scope, $http, $routeParams) {
    $http.get('Content/data/mp_email_data.json').success(function(data){
        $scope.mpemailcampaign = data;
        $scope.whichItem = $routeParams.itemId;
   });  
});

//These will bring in the data for the Websites Promotions examples.
//123print.com
app.controller('PrintWebController', function PrintWebController($scope, $http) {
    $http.get('Content/data/123_web_data.json').success(function(data){
        $scope.PrintWebcampaign = data;
   });  
});
app.controller('PrintWebDetailsController', function PrintWebDetailsController($scope, $http, $routeParams) {
    $http.get('Content/data/123_web_data.json').success(function(data){
        $scope.PrintWebcampaign = data;
        $scope.whichItem = $routeParams.itemId;
   });  
});
//HSN.com
app.controller('HSNWebController', function HSNWebController($scope, $http) {
    $http.get('Content/data/hsn_web_data.json').success(function(data){
        $scope.HSNWebcampaign = data;
   });  
});
app.controller('HSNWebDetailsController', function HSNWebDetailsController($scope, $http, $routeParams) {
    $http.get('Content/data/hsn_web_data.json').success(function(data){
        $scope.HSNWebcampaign = data;
        $scope.whichItem = $routeParams.itemId;
   });  
});
//Intelitech.com
app.controller('INTWebController', function INTWebController($scope, $http) {
    $http.get('Content/data/int_web_data.json').success(function(data){
        $scope.INTWebcampaign = data;
   });  
});
app.controller('INTWebDetailsController', function INTWebDetailsController($scope, $http, $routeParams) {
    $http.get('Content/data/int_web_data.json').success(function(data){
        $scope.INTWebcampaign = data;
        $scope.whichItem = $routeParams.itemId;
   });  
});
//Miscellaneous Website
app.controller('MisWebController', function MisWebController($scope, $http) {
    $http.get('Content/data/mis_web_data.json').success(function(data){
        $scope.MisWebcampaign = data;
   });  
});
app.controller('MisWebDetailsController', function MisWebDetailsController($scope, $http, $routeParams) {
    $http.get('Content/data/mis_web_data.json').success(function(data){
        $scope.MisWebcampaign = data;
        $scope.whichItem = $routeParams.itemId;
   });  
});

//These will bring in the data for the Print Promotions examples.
//Living Naturally
app.controller('LNPrintController', function LNPrintController($scope, $http) {
    $http.get('Content/data/ln_print_data.json').success(function(data){
        $scope.LNPrintcampaign = data;
   });  
});
app.controller('LNPrintDetailsController', function LNPrintDetailsController($scope, $http, $routeParams) {
    $http.get('Content/data/ln_print_data.json').success(function(data){
        $scope.LNPrintcampaign = data;
        $scope.whichItem = $routeParams.itemId;
   });  
});
app.controller('NISRTPrintController', function NISRTPrintController($scope, $http) {
    $http.get('Content/data/nisrt_print_data.json').success(function(data){
        $scope.NISRTPrintcampaign = data;
   });  
});
app.controller('NISRTPrintDetailsController', function NISRTPrintDetailsController($scope, $http, $routeParams) {
    $http.get('Content/data/nisrt_print_data.json').success(function(data){
        $scope.NISRTPrintcampaign = data;
        $scope.whichItem = $routeParams.itemId;
   });  
});
//Hydro Water
app.controller('HDPrintController', function HDPrintController($scope, $http) {
    $http.get('Content/data/hd_print_data.json').success(function(data){
        $scope.HDPrintcampaign = data;
   });  
});
app.controller('HDPrintDetailsController', function HDPrintDetailsController($scope, $http, $routeParams) {
    $http.get('Content/data/hd_print_data.json').success(function(data){
        $scope.HDPrintcampaign = data;
        $scope.whichItem = $routeParams.itemId;
   });  
});//Intelitech
app.controller('INTPrintController', function INTPrintController($scope, $http) {
    $http.get('Content/data/int_print_data.json').success(function(data){
        $scope.INTPrintcampaign = data;
   });  
});
app.controller('INTPrintDetailsController', function INTPrintDetailsController($scope, $http, $routeParams) {
    $http.get('Content/data/int_print_data.json').success(function(data){
        $scope.INTPrintcampaign = data;
        $scope.whichItem = $routeParams.itemId;
   });  
});