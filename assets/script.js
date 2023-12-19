const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

let currentSlide = 0;

function updateSlide() {
	const bannerImg = document.querySelector('.banner-img');
	const tagLine = document.querySelector('#banner p');
	const dots = document.querySelectorAll('.dot');
  
	bannerImg.src = `./assets/images/slideshow/` + slides[currentSlide].image;
	tagLine.innerHTML = slides[currentSlide].tagLine;
	
	//Points
	for (let i = 0; i < dots.length; i++) {
		const dot = dots[i];
		dot.classList.toggle('dot_selected', i === currentSlide);
	  }
	}
  
	function passerSlide(direction) {
		if (direction === 'droite') {
		  // Incrémente sans dépasser dernier élément du tableau
		  if (currentSlide + 1 < slides.length) {
			currentSlide++;
		  } else {
			currentSlide = 0;
		  }
		} else if (direction === 'gauche') {
		  // Décrémente sans dépasser premier élément du tableau
		  if (currentSlide - 1 >= 0) {
			currentSlide--;
		  } else {
			currentSlide = slides.length - 1;
		  }
		}
	  
		updateSlide();
	  }
	  
	  arrow_right.addEventListener('click', function() {
		passerSlide('droite');
	  });
	  arrow_left.addEventListener('click', function() {
		passerSlide('gauche');
	  });
