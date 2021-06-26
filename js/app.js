const $sections = document.querySelectorAll('.section');
const $form = document.getElementById('contact');
const $btnMailTo = document.getElementById('mailTo');

$form.addEventListener('submit', handleSubmit);

const observer = new IntersectionObserver((entries) => setEntries(entries));

for (const section of $sections) {
	observer.observe(section);
}

function addActiveClass(element) {
	const activeElement = document.querySelector('.is-active');
	const currentSection = element.id;

	activeElement?.classList.remove('is-active');
	document
		.querySelector(`a[href="#${currentSection}"]`)
		.classList.add('is-active');
}

function handleSubmit(e) {
	e.preventDefault();
	const form = new FormData(this);
	$btnMailTo.setAttribute(
		'href',
		`mailto:danielavaldivia.dev@gmail.com?subject=${form.get(
			'name'
		)} - ${form.get('email')}&body=${form.get('message')}`
	);
	console.log(form.get('name'));
	$btnMailTo.click();
}

function setEntries(entries) {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			addActiveClass(entry.target);
		}
	}
}
