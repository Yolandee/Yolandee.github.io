let isPinkMode=false;

function switchColor(){//click event
	//change background color
	if(isPinkMode===false){
		document.documentElement.style.setProperty("--col-01","#f2fbeb");
		document.documentElement.style.setProperty("--col-02","#a1848d");
		document.getElementById("Button").innerHTML="Pink Mode";
		isPinkMode=true;
	}else{//I chose to use this color so that the screen doesn't look harsh and the fonts are clearly visible.
		document.documentElement.style.setProperty("--col-01","#a1848d");
		document.documentElement.style.setProperty("--col-02","#f2fbeb");
		document.getElementById("Button").innerHTML="Light Mode";
		isPinkMode=false;
	}
	
}