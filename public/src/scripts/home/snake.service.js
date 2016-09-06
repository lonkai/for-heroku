(function (angular) {
    'use strict';

    angular
        .module('issueTrackerApp')
        .service('snakeService', snakeService);

    snakeService.$inject = ['$uibModal', '$log'];

    function snakeService($uibModal, $log) {
        function modalWindow () {};

        modalWindow.create = function (poll, count, log) {
            return $uibModal.open({
                animation: true,
                templateUrl: './src/templates/modal-snake.htm',
                controller:  'SnakeCtrl',
                controllerAs: 'snake',
                resolve: {
                }
            });

        };

        return modalWindow;
    }
})(angular);