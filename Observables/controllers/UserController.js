function UserController(user){
	this.model = user;
}

UserController.prototype.update = function(label, data){
	// Si le label correspond à un changement de username
	// dire au model de s'updater en fonction
	if(label === 'change-username') {
		this.model.setUsername(data.username);
    }
}