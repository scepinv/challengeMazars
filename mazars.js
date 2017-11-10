var invaders = document.querySelectorAll("invader");
var maz = document.querySelector("mazars");
var mazpos = 0;
var invapos = [100, 200, 300]
var pas_invada = 0.75;
var pas_maza =  0.25;
var messageId = 0;
var messageOn = false;

window.addEventListener("load", function() {

	window.addEventListener("keydown", function(evt) {
		if(evt.keyCode == 39 && !messageOn) {
			evt.preventDefault();
			moveMaza(maz, pas_maza);
			moveAllInvaders(invaders,pas_invada);
			}

		if(evt.keyCode == 37 && !messageOn) {
			evt.preventDefault();
			moveMaza(maz, -pas_maza);
			moveAllInvaders(invaders, -pas_invada);
			}

		if (evt.keyCode == 13 && messageOn){

			endMessage(messageId);

		}
		})

	function moveMaza(maza,pas){
			mazpos = mazpos + pas;
			maza.style["transform"] = "translateX("+mazpos+"vw)";
		}

	function moveAllInvaders(invaderArr,pas)
	{
		for(i = 0; i < invaderArr.length; i++)
		{
			invapos[i] = invapos[i] - pas;
			invaderArr[i].style["transform"] = "translateX("+invapos[i]+"vw)";
			if (invapos[i] - mazpos == 1)
			{
				messageId = i;
				messageOn = true;
				movingOrStatic("", "none");
			}
		}
	}

	function movingOrStatic(Static,Moving){

		for(i=0; i < invaderArr.length; i++){
			document.getElementById("invada"+i+"static").style["display"] = Moving;
			document.getElementById("invada"+i).style["display"] = Static;
		}
		document.getElementById("mazaDisplayStatic").style["display"] = Moving;
		document.getElementById("mazaDisplay").style["display"] = Static;
	}

	function endMessage(id){

		messageOn = false;
		movingOrStatic("none", "");

	}

},false);