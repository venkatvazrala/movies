angular.
  module('movieApp').
  component('movieList', {
    templateUrl: 'template.html',
    controller: ['$http',
      function MovieListController($http) {
        var self = this;
        self.orderProp = 'releaseyear';

        $http.get('movies/movies.json').then(function(response) {
          self.movies = response.data;
        });
      }
    ]
  });