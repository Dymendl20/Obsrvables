function Observable(){
	this.observers = [];
}

Observable.prototype.addObserver= function(observer) {
    this.observers.push(observer);
}

Observable.prototype.removeObserver= function(observer){
	var idx = this.observers.indexOf(observer);
	if (idx !== -1){
		this.observers.splice(idx, 1);
	}
}

// Envoie de notifications (label) avec des data
Observable.prototype.notify= function(label, data){
	console.log(label, data);
	this.observers.forEach(function(obs){
		obs.update(label, data);
	})
}
