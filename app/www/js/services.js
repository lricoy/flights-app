angular.module('starter.services', ['ngResource'])

.factory('Oferta', function($resource) {
  return $resource('https://lricoy-flights.herokuapp.com/ofertas/:ofertaId', {ofertaId: '@id'});
});