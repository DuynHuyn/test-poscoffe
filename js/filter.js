// xóa 
function disableAll()
{
	var x = document.getElementsByClassName("col");
	for (let i=0; i<x.length; i++){
		x[i].style.display = "none";
	}
	
}

function show(e, a){
	e.preventDefault();
	disableAll();
	var x = document.getElementsByClassName(a);
	for (let i=0; i<x.length; i++){
		x[i].style.display = "flex";
	}
	return false;
}