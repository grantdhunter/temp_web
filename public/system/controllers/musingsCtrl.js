function musingsCtrl($scope, $routeParams) {

    $scope.linkDump = [{
            title: 'You are Not a Software Engineer!',
            link: 'http://www.chrisaitchison.com/2011/05/03/you-are-not-a-software-engineer/'
        },
        {
            title: 'No One Knows What the F*** They’re Doing (or “The 3 Types of Knowledge”)',
            link: 'http://jangosteve.com/post/380926251/no-one-knows-what-theyre-doing'
        },
        {
            title: 'The expert (Short Comedy Sketch)',
            link: 'https://www.youtube.com/watch?v=BKorP55Aqvg'
        }
                     ];

    $scope.musings = [{
        title: 'Welcome',
        date: 'September 4, 2014',
        body: 'Welcome to my website. Here\'s some coding humour to fill up space until I have some real content to put up. Check out my link dump to see things that I found super interesting on the interwebs.',
        img: 'http://images2.wikia.nocookie.net/__cb20130825215216/vuh/images/thumb/b/b9/My-code-doesnt-work-I-have-no-idea-why-My-code-works-I-have-no-idea-why.jpg/320px-My-code-doesnt-work-I-have-no-idea-why-My-code-works-I-have-no-idea-why.jpg',
        link: ''
    }];
}