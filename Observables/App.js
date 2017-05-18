window.onload = function(){
// J'instancie (crée) mon model
var user =  new User('Dymen');

// J'instancie ma view
var view =  new UserView();

// J'instancie mon controller
var controller =  new UserController(user);

// La view observe le model
user.addObserver(view);

// Le controller observe la view
view.addObserver(controller);

// Je gère les relations Observable <-> Observers

}