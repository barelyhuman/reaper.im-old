const body = document.querySelector('body');
body.onload = checkHashAndActivateSection;

function checkHashAndActivateSection(e){
	const value = window.location.hash.split('/')[1];
	activate(e,value);
}

function activate(e,value){
	if(!value){
		value = e.innerHTML.toLowerCase();
	}
	var section=document.getElementById(value);
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
	changeButtonToActive({activeClass:'active-btn',menuText:value});
	window.location='/#/'+ (value || e.innerHTML.toLowerCase());
}

function goTo(url){
	window.location=url;
}

function changeButtonToActive(opts){
	var activeClassName = opts.activeClass;
	var menuText = opts.menuText;
	var navButtons = document.querySelectorAll('.nav-btn');
	navButtons.forEach(function(button){
		if(button.innerHTML && button.innerHTML.toLowerCase() === menuText.toLowerCase()){
			button.classList.add(activeClassName);
		}
	})
}