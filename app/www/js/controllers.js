angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $state, Oferta) {
  $scope.ofertas = Oferta.query({select: "name tittle origens destinos"});
})

.controller('OfertaDetailCtrl', function ($scope, $stateParams, Oferta) {
	$scope.oferta = Oferta.get({ofertaId: $stateParams.ofertaId});
	console.log($scope.oferta);

	$scope.getItemHeight = function(item, index) {
		//Make evenly indexed items be 10px taller, for the sake of example
		return (index % 2) === 0 ? 90 : 90;
	};
})

.controller('AccountCtrl', function ($scope) {
});
