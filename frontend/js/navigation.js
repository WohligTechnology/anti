var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
    var navigation = [{
            name: "Home",
            classis: "active",
            anchor: "home",
            subnav: [{
                name: "Subnav1",
                classis: "active",
                anchor: "home"
            }]
        }, {
            name: "Form",
            classis: "active",
            anchor: "form",
            subnav: []
        },

        {
            name: "Fiction",
            classis: "active",
            anchor: "fiction",
            subnav: []
        },

         {
            name: "Inspire",
            classis: "active",
            anchor: "inspire",
            subnav: []
        },
         {
            name: "Videocast",
            classis: "active",
            anchor: "videocast",
            subnav: []
        }
    ];


    return {
        getnav: function () {
            return navigation;
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

    };
});