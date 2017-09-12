function activate(e){
	var value = e.innerHTML.toLowerCase();
	var section = document.getElementById(value);
	var sections = document.getElementsByTagName('section');
	var buttons = document.querySelectorAll('.nav-btn');

	for(var i=0;i<sections.length;i+=1){
		sections[i].classList.remove('active');
		sections[i].classList.remove('display-flex');
	}

	for(var i=0;i<buttons.length;i+=1){
		buttons[i].classList.remove('active-btn');
	}

	section.classList.add('display-flex');
	section.offsetWidth;
	section.classList.add('active');
	e.classList.add('active-btn')
}