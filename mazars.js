window.addEventListener("load", function() {
	var mazimg = document.querySelector("mazars img");
	var invaders = document.querySelectorAll("invader");
	var maz = document.querySelector("mazars");
	var mazpos = getTranslateNum(maz);
	var invapos = []
	for(i = 0; i < invaders.length; i++)
		invapos[i] = getTranslateNum(invaders[i]);
	var pas_invada = 0.50;
	var pas_maza =  0.50;
	var messageId = 0;
	var messageOn = false;
	var begin = true;
	var middle = false;
	var walking = false;
	var finish = false;


	mazimg.setAttribute("src","mazarsImmo.png");

	window.addEventListener("keydown", function(evt) {
		if(evt.keyCode == 39 && !messageOn && middle) {
			evt.preventDefault();
			if(!walking) {
				mazimg.setAttribute("src","mazarsKunDroite.gif");
				walking = true;
			}
			moveAllInvaders(invaders,pas_invada);
			if (mazpos <= 55 || finish){
				moveMaza(maz, pas_maza);
				console.log("mazbouge");
			}
			else
				pas_invada = 0.75;
		}
		if(evt.keyCode == 37 && !messageOn && middle) {
			evt.preventDefault();
			if(!walking) {
				mazimg.setAttribute("src","mazarsKunGauche.gif");
				walking = true;
			}
			moveMaza(maz, -pas_maza);
			moveAllInvaders(invaders, -pas_invada);
		}
		if (evt.keyCode == 13 && messageOn && middle){
			mazimg.setAttribute("src","mazarsImmo.png");
			endMessage(invaders.length, messageId);
		}
		if (evt.keyCode == 13 && begin){
			mazimg.setAttribute("src","mazarsImmo.png");
			goMiddle();
		}
	}, false);

	window.addEventListener("keyup", function(evt) {
		evt.preventDefault();
		if(walking && evt.keyCode == 39) {
			mazimg.setAttribute("src","mazarsImmo.png");
			walking = false;
		}
		if(walking && evt.keyCode == 37) {
			mazimg.setAttribute("src","mazarsImmoRev.png");
			walking = false;
		}		
	},false);

	function moveMaza(maza,pas) {
		mazpos = mazpos + pas;
		maza.style["transform"] = "translateX("+mazpos+"vw)";
		if (mazpos >= 90) {
			middle = false;
			document.querySelector("world").style["display"] = "none";
			document.querySelector("end").style["display"] = "";
		}
	}

	function moveAllInvaders(invaderArr,pas) {
		for(i = 0; i < invaderArr.length; i++)
		{
			invapos[i] = invapos[i] - pas;
			invaderArr[i].style["transform"] = "translateX("+invapos[i]+"vw)";
			if (4.75 <= (invapos[i] - mazpos) && (invapos[i] - mazpos) <= 5) {
				messageId = i;
				messageOn = true;
				document.getElementById(i).style["display"] = "";
				mazaDisplay.setAttribute("src","mazarsImmo.png");
			}
		}
	}

	function endMessage(invaderArrLength, id){
		messageOn = false;
		document.getElementById(id).style["display"] = "none";
		invaders[id].querySelector("img").setAttribute("src",id+"face.png");
		if(id == invaderArrLength - 1){
			finish = true;
			console.log("finish");
		}
	}

	function goMiddle(){
		document.querySelector("world").style["display"] = "";
		document.querySelector("firstScreen").style["display"] = "none";
		middle = true;
		begin = false;
	}

	function getTranslateNum(elt)
	{
		return parseFloat(elt.style["transform"].substring(11));
	}

},false);