(function () {

	const URLS = {
		blog: 'https://blog.siddharthgelera.com'
	}

	function init() {
		injectSectionHandler();
		addHomeSectionButtonHandlers();
		homeButtonHandler();
	}

	function injectSectionHandler() {
		const defaultSection = getSections().defaultSection;
		defaultSection.classList.remove('hidden');
	}

	function getSections() {
		const sectionKeys = ['home', 'work', 'skills', 'learning', 'about', 'hire'];
		const sections = {};

		sectionKeys.forEach(function (sectionKey) {
			sections[sectionKey + 'Section'] = document.querySelector('#' + sectionKey);
		});

		const firstSection = Object.keys(sections)[0];
		const defaultSection = sections[firstSection];

		return {
			sections,
			defaultSection
		};

	}

	function addHomeSectionButtonHandlers() {
		const buttons = {
			hireButton: document.querySelector('#home-hire-button'),
			workButton: document.querySelector('#home-work-button'),
			skillsButton: document.querySelector('#home-skills-button'),
			learningButton: document.querySelector('#home-learning-button'),
			aboutButton: document.querySelector('#home-about-button'),
			blogButton: document.querySelector('#blog-button'),
		}

		buttons.hireButton.addEventListener('click', function () {
			setActiveSection('hire');
		});

		buttons.workButton.addEventListener('click', function () {
			setActiveSection('work');
		});

		buttons.skillsButton.addEventListener('click', function () {
			setActiveSection('skills');
		});

		buttons.learningButton.addEventListener('click', function () {
			setActiveSection('learning');
		});

		buttons.aboutButton.addEventListener('click', function () {
			setActiveSection('about');
		});

		buttons.blogButton.addEventListener('click', function () {
			window.open(URLS.blog);
		});

	}

	function homeButtonHandler() {
		const buttons = document.querySelectorAll('.back-button');

		buttons.forEach(function (buttonItem) {

			buttonItem.addEventListener('click', function () {

				setActiveSection('home');

			});

		});



	}

	function setActiveSection(sectionKey) {
		const sections = getSections().sections;
		const matchingKey = sectionKey + 'Section';

		Object.keys(sections).forEach(sectionKey => {
			if (sectionKey === matchingKey) {
				sections[sectionKey].classList.remove('hidden');
			} else {
				sections[sectionKey].classList.add('hidden');
			}
		});

	};


	init();



})()
