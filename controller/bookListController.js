app
.constant('categoryActiveClass', 'btn-primary')
.controller('bookCtrl', function($scope, $filter, categoryActiveClass, cart){
    var selectedCategory=null;
    $scope.selectCategory=function(newCategory){
        selectedCategory=newCategory;
    }
    $scope.categoryFilterFn=function(book){
        return selectedCategory==null||book.category==selectedCategory;
    }
    $scope.getCategoryClass=function(category){
        return selectedCategory==category? categoryActiveClass:'';
    }
    $scope.addBookToCart=function(book){
        cart.addBook(book.id, book.name, book.price)
    }
    $scope.getBook=function(){
        return cart.getBooks();
    }
    $scope.total=function(){
        var total=0;
        var list= cart.getBooks();
        for(var i=0; i<list.length; i++){
            total+=list[i].price*list[i].count
        }
        return total;
    }
})