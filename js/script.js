'use strict';
/*---------CODE PRINCIPAL------*/

document.addEventListener('DOMContentLoaded', function(){
	
	// effet toggle de l'affichage des boutons class="toogle-button"
	showHide();

	// POUR LE SLIDER DE LA PAGE D'ACUEIL

	cpt = 0;
	timer = null;

	figureSlider = document.querySelector("#sliderhome img");
	//header = document.querySelector("header");
	//fig = document.querySelector("figure");
	//div = document.querySelector("div");
	
	// Lecture au chargement de la page
	play();
	
	// ajustement des images su slide
	//hauteurSlide();
	
	
	// POUR LE SLIDER DE LA PAGE DE FOOT
	cptF = 0;
	timerF = null;
	
    let prev = document.getElementById("slider-prev");
	let next = document.getElementById("slider-next");
	
	prev.addEventListener('click', prevSlideF);
	next.addEventListener('click', nextSlideF);
	

	figureSliderF = document.querySelector("#slider-foot img");

	playF();
	
	
});
