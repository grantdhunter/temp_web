function musingsCtrl($scope, $routeParams) {

    $scope.linkDump = [{
            title: 'You are Not a Software Engineer!',
            link: 'http://www.chrisaitchison.com/2011/05/03/you-are-not-a-software-engineer/'
        },
        {
            title: 'No One Knows What the F*** They’re Doing (or “The 3 Types of Knowledge”)',
            link: 'http://jangosteve.com/post/380926251/no-one-knows-what-theyre-doing'
        }
                     ];

    $scope.musings = [{
        title: 'Demo Musing',
        date: 'September 4, 2014',
        body: 'Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I\'m in a transitional period so I don\'t wanna kill you, I wanna help you. But I can\'t give you this case, it don\'t belong to me. Besides, I\'ve already been through too much shit this morning over this case to hand it over to your dumb ass.',
        img: 'http://i0.kym-cdn.com/photos/images/original/000/581/723/a8b.jpg',
        link: ''
    }];
}