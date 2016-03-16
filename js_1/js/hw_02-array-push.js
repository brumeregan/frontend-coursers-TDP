auth();

function auth(){
	var array = [];

	for (var i = 0; i < 5; i++){
		var nameToAdd = prompt("Please, enter name:");
		array.push(nameToAdd);
	}

	var user = prompt("Enter username");

	isAdmin = false;

	for (var i = 0; i < array.length; i++){
		if(user.toUpperCase() == array[i].toUpperCase()){
			isAdmin = true;
		}
	}

	if(isAdmin){
		return alert(user + ", Вы успешно вошли в систему!");
	}

	return alert("!Error!");
}