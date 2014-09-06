function apiService($resource) {
    return $resource('api/github/:user', {}, {
        query: {
            method: 'GET',
            params: {
                user: 'user'
            },
            isArray: true
        }
    });

}