function appCtrl($scope) {
    //initial setup
    $scope.siteTitle = "Grant-Hunter.ca";
    $scope.sitePages = [{
        title: "Musings",
        id: "musings"
    }, {
        title: "Work",
        id: "work"
    }, {
        title: "Projects",
        id: "projects"
    }, {
        title: "About",
        id: "about"
    }];
    
    $scope.currentPage = $scope.sitePages[0];

    $scope.switchPage = function (page) {
        $scope.currentPage = page;
    }



}