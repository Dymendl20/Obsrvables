function UserView(){
    Observable.call(this);
    this.init();
}

UserView.prototype= Object.create(Observable.prototype);
UserView.prototype.constructor= UserView;

UserView.prototype.init = function() {
    document.getElementById('change-username').onsubmit = (function (e) {
        e.preventDefault();
        // envoie d'une notification
        this.notify('change-username', {
            username: document.getElementById('username').value
        })
    }).bind(this);
}

UserView.prototype.update = function(label, data){
	// Récupère les notifications du modèle
    // et se met à jour en fonction
    if(label === 'changed'){
        document.getElementById('show-username').innerText = data.username;
    }
}