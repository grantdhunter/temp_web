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

    $scope.setCurrentPage = function(page) {
        if(page === '/') {
            page = $scope.sitePages[0];   
        }
        $scope.currentPage = page;
    }

    $scope.onPage = function(page) {
        if($scope.currentPage === page) {
            return true; 
        } else {
            return false;
        }
    }
}