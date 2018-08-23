(function() {
    'use strict';

    angular
        .module('app')
        .controller('GithubController', GithubController);

    GithubController.$inject = ['$http'];

    function GithubController($http) {
        var vm = this;
        vm.callGithubApi = callGithubApi;

        vm.hirable = true;
        

        ///////////////////////////////////



        function callGithubApi() {

            $http
                .get('http://api.github.com/users/' + vm.username + '?access_token=')
                .then(function(response) {

                    vm.data = response.data;
                })
                .catch(function(error) {
                    alert('An error occured downloading from Github');
                });


            document.getElementById('hide').style.visibility = 'visible';
            document.getElementById('hide2').style.visibility = 'visible';
        }

    }
})();
