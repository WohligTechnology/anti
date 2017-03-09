angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.swiper'])

    .controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        // $scope.mySlides = [
        //     'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        //     'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        //     'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        //     'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        // ];
        $scope.categories = ['frontend/img/2.jpg', 'frontend/img/4.jpg', 'frontend/img/5.jpg', 'frontend/img/2.jpg', 'frontend/img/4.jpg', 'frontend/img/5.jpg'];
        $scope.testmonial = [{
            title: 'Lorem Ipsum is simply dummy text',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 0the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been"
        }, {
            title: 'Lorem Ipsum is simply dummy text',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 0the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambledLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been"
        }];
    })
    .controller('HeaderCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.$on('$viewContentLoaded', function () {
            //    $(window).scroll(function() {
            //         var scroll = $(window).scrollTop();
            //        console.log("hi" ,scroll);
            //     //    var height = 70;
            //        if (500 <= scroll) {
            //            $(".clearHeader").addClass('show-header');
            //        } else {
            //            $(".clearHeader").removeClass('show-header');
            //        }
            //    });

        });
        $(document).ready(function () {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 70) {
                    console.log('amit');
                    $(".fix-hidden").addClass("show-header");
                } else {
                    $(".fix-hidden").removeClass("show-header");
                }
            });
        });

    })
    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.formSubmitted = false;

        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        }
    })

    .controller('FictionCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("fiction"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Fiction"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.formSubmitted = false;

        // TemplateService.header = "frontend/views/header1.html";

       
    })

    .controller('InspireCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("inspire"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Inspire"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.formSubmitted = false;

        // $scope.inspireImg=[
        //     'frontend/img/24.jpg',
        //     'frontend/img/23.jpg',
        //     'frontend/img/21.jpg',
        //     'frontend/img/24.jpg',
        //     'frontend/img/23.jpg',
        //     'frontend/img/21.jpg'
        // ]
        $scope.inspireImg=[{
            img:'frontend/img/67.jpg',
            title1:'THE EARTH BELOW',
            title2:'BY CHRISTIAN GREWE'
        },{
            img:'frontend/img/23.jpg',
            title1:'THE TWO-DOLLAR BILL',
            title2:'BY CHRISTIAN GREWE'
        },{
            img:'frontend/img/84.jpg',
            title1:'ONE PEBBLE AT A TIME',
            title2:'BY CHRISTIAN GREWE'
        },{
            img:'frontend/img/67.jpg',
            title1:'THE EARTH BELOW',
            title2:'BY CHRISTIAN GREWE'
        },{
            img:'frontend/img/23.jpg',
            title1:'THE TWO-DOLLAR BILL',
            title2:'BY CHRISTIAN GREWE'
        },{
            img:'frontend/img/84.jpg',
            title1:'ONE PEBBLE AT A TIME',
            title2:'BY CHRISTIAN GREWE'
        }]
        // $scope.inspireSlide=_.chunk($scope.inspireImg,3);

    })
    .controller('VideocastCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("videocast"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Videocast"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.formSubmitted = false;


    })
    .controller('videogalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("videogallery"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Video Gallery"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.formSubmitted = false;
         $scope.galleryImg = [
           'frontend/img/videogallery/img-1.jpg',
           'frontend/img/videogallery/img-2.jpg',
           'frontend/img/videogallery/img-3.jpg',
           'frontend/img/videogallery/img-4.jpg',
           'frontend/img/videogallery/img-5.jpg',
           'frontend/img/videogallery/img-6.jpg',
           'frontend/img/videogallery/img-7.jpg',
           'frontend/img/videogallery/img-8.jpg',
           'frontend/img/videogallery/img-9.jpg',
           'frontend/img/videogallery/img-10.jpg'
       ]
       
       $scope.gallery = _.chunk($scope.galleryImg, 5);
       console.log($scope.gallery);
    })

    .controller('headerctrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        $.fancybox.close(true);
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 70) {
                console.log('amit');
                $(".fix-hidden").addClass("show-header");
            } else {
                $(".fix-hidden").removeClass("show-header");
            }
        });
    })

    .controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

        $scope.changeLanguage = function () {
            console.log("Language CLicked");

            if (!$.jStorage.get("language")) {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                if ($.jStorage.get("language") == "en") {
                    $translate.use("hi");
                    $.jStorage.set("language", "hi");
                } else {
                    $translate.use("en");
                    $.jStorage.set("language", "en");
                }
            }
            //  $rootScope.$apply();
        };


    })

    ;