var invaders = document.querySelectorAll("invader");
var maz = document.querySelector("mazars");
var mazpos = 0;
var invapos = [100, 190, 280]
var invaposreel = [100, 200, 300]
var pas_invada = 0.75;
var pas_maza =  0.25;
var messageId = 0;
var messageOn = false;
var begin = true;
var middle = false;



window.addEventListener("load", function() {

	window.addEventListener("keydown", function(evt) {
		if(evt.keyCode == 39 && !messageOn && middle) {
			evt.preventDefault();
			moveAllInvaders(invaders,pas_invada);
			moveMaza(maz, pas_maza);
			}

		if(evt.keyCode == 37 && !messageOn && middle) {
			evt.preventDefault();
			moveMaza(maz, -pas_maza);
			moveAllInvaders(invaders, -pas_invada);
			}

		if (evt.keyCode == 13 && messageOn && middle){

			endMessage(invaders.length, messageId);

		}

		if (evt.keyCode == 13 && begin){

			goMiddle();

		}

		})

	function moveMaza(maza,pas){
			mazpos = mazpos + pas;
			maza.style["transform"] = "translateX("+mazpos+"vw)";
			if (mazpos == 100){
				middle = false;
				document.querySelector("world").style["display"] = "none";
				document.querySelector("end").style["display"] = "";
			}
		}

	function moveAllInvaders(invaderArr,pas)
	{
		for(i = 0; i < invaderArr.length; i++)
		{
			invapos[i] = invapos[i] - pas;
			invaposreel[i] = invaposreel[i] - pas;
			invaderArr[i].style["transform"] = "translateX("+invapos[i]+"vw)";
			if (Math.abs(invaposreel[i] - mazpos) <= 0.5)
			{
				messageId = i;
				messageOn = true;
				document.getElementById(i).style["display"] = "";
				document.getElementById("mazaDisplayStatic").style["display"] = "";
				document.getElementById("mazaDisplay").style["display"] = "none";
			}
		}
	}

	function endMessage(invaderArrLength, id){

		messageOn = false;
		document.getElementById(id).style["display"] = "none";
		document.getElementById("mazaDisplayStatic").style["display"] = "none";
		document.getElementById("mazaDisplay").style["display"] = "";

	}

	function goMiddle(){

		document.querySelector("world").style["display"] = "";
		document.getElementById("begin").style["display"] = "none";
		middle = true;
		begin = false;

	}

},false);