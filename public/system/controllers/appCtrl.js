function appCtrl($scope){
    //initial setup
    $scope.siteTitle = "Grant-Hunter.ca";
    $scope.sitePages = ["Musings", "Work", "Projects", "About"];
    $scope.currentPage = $scope.sitePages[0];
    
    $scope.switchPage = function(page){
        $scope.currentPage = page;
    }
    
    
    
}