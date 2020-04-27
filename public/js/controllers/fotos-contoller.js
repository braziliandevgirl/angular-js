angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];

    $http.get('v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(erro) {
        console.log(erro);
    });    
    
    // Podemos omitir a declaracao da variavel 'promise'
    // var promise = $http.get('v1/fotos');
    // promise.then(function(retorno) {
    //     $scope.fotos = retorno.data;
    // }).catch(function(error) {
    //     console.log(error);
    // });
});