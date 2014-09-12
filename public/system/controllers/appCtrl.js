function appCtrl($scope, $location) {
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

    var path = $location.path().slice(1);

    $scope.currentPage = findCurrentPage(path);

    $scope.setCurrentPage = function (page) {
        if (page === '/' ) {
            page = $scope.sitePages[0];
        }
        $scope.currentPage = page;
    }

    $scope.onPage = function (page) {
        if ($scope.currentPage === page) {
            return true;
        } else {
            return false;
        }
    }

    //only is used when user first arrives on the page
    function findCurrentPage(pageId) {
        console.log(pageId);
        for (var i = 0; i < $scope.sitePages.length; i++) {
            if ($scope.sitePages[i].id === pageId) {
                return $scope.sitePages[i];
            }
        }
        return $scope.sitePages[0];
    }
}