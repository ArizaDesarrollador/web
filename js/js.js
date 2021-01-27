function EnDesarrollo (){
	
	alert('Esta opción se encuentra en desarrollo.');
}



function barra (){
	x=document.getElementById("barra");
	x.classList.toggle("barra_open");
}


function display1 (){
	var x = document.getElementById("art1");

	if (x.style.opacity == '0.1'){
		x.style.opacity = '1';
	}else{
		x.style.opacity = '0.1';
	}
}

function display2 (){
	var x = document.getElementById("art2");

	if (x.style.opacity == '0.1'){
		x.style.opacity = '1';
	}else{
		x.style.opacity = '0.1';
	}
}

function display3 (){
	var x = document.getElementById("art3");

	if (x.style.opacity == '0.1'){
		x.style.opacity = '1';
	}else{
		x.style.opacity = '0.1';
	}
}

function display4 (){
	var x = document.getElementById("art4");

	if (x.style.opacity == '0.1'){
		x.style.opacity = '1';
	}else{
		x.style.opacity = '0.1';
	}
}





function display5 (){
	var x = document.getElementById("articulo1");

	if (x.style.opacity == '0.1'){
		x.style.opacity = '1';
	}else{
		x.style.opacity = '0.1';
	}
}

function menu_movil(){
	var x = document.getElementById("menu_abierto");
	x.classList.toggle("menu_abierto_activo");

	var j = document.getElementById("menu_cerrado");
	j.classList.toggle("menu_cerrado_desactivado");
	
	}
	





function todo (){
	menu_movil();
	barra();
	display1();
	display2();
	display3();
	display4();
	
}

function todocv(){
	menu_movil();
	barra();
	display5();

}