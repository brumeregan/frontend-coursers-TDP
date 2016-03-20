var generateHtml = {
	body: document.querySelector('body'),
	title: "Заголовок теста",
	questions: {
		"Вопрос 1": ["Ответ 1", "Ответ 2", "Ответ 3"],
		"Вопрос 2": ["Ответ 1", "Ответ 2", "Ответ 3"],
		"Вопрос 3": ["Ответ 1", "Ответ 2", "Ответ 3"]
	},
	
	generate: function(){
		this.createTitle();
		this.createBox();
		this.createButton();
	},

	createTitle: function(){
		var title = document.createElement('h1');
		title.innerHTML = this.title;
		this.body.appendChild(title);
	},

	createBox: function(){
		var box = document.createElement('div');
		var keyId = 0;
		for (var key in this.questions ){
			var questionElem = document.createElement('h3');
			questionElem.classList.add('question');
			questionElem.innerHTML = key;
			box.appendChild(questionElem);

			for (var i = 0; i < this.questions[key].length; i++){

				var answer = this.questions[key][i];

				var checkbox = document.createElement('input');
				checkbox.type = 'checkbox';
				checkbox.setAttribute('id', 'checkbox_' + keyId + "_" + i);

				var label = document.createElement('label');
				label.setAttribute('for', 'checkbox_' + keyId + "_" + i);
				label.innerHTML = answer;

				box.appendChild(checkbox);
				box.appendChild(label);
			}
			this.body.appendChild(box);
			keyId++;
		}
	},

	createButton: function(){
		var button = document.createElement('button');
		button.innerHTML = "Кнопка. Нажать здесь";
		this.body.appendChild(button);
	}
}

generateHtml.generate();


