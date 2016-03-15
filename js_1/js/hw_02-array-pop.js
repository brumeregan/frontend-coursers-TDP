auth();

function auth(){
	var array = [];

	for (var i = 0; i < 5; i++){
		var nameToAdd = prompt("Please, enter name:");
		array.push(nameToAdd);
	}

	var user = prompt("Enter username");

	if ( isAdmin(array, user) ){
		return alert(user + ", Вы успешно вошли в систему!");
	}

	return alert("!Error!");
}

function isAdmin(array, user){
	for (var i = 0; i < array.length; i++){
		if(user.toUpperCase() == array[i].toUpperCase()){
			return true;
		}
	}
	return false;
}