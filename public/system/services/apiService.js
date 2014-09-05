function apiService($resource) {

    function github(user) {
        $resource('api/github/:user', {}, {
            query: {
                method: 'GET',
                params: {
                    user: user
                }
            }
        });
    }

    return {
        github: github
    };

}