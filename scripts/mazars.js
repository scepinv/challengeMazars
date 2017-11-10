window.addEventListener("load", function() {
	console.log("js charge");
	var pas = 0.75;
	var invaders = document.querySelectorAll("invader");
	var maz = document.querySelector("mazars");
	var mazpos = getTranslateNum(maz);
	var invapos = getPosInvaders(invaders);
	console.log("invapos",invapos);
	window.addEventListener("keydown", function(evt) {
		if(evt.keyCode == 39) {
			evt.preventDefault();
			var mazpos = getTranslateNum(maz);
			if(mazpos <= 45) {
				var mazpos = getTranslateNum(maz);
				var newMazp = mazpos + pas;
				maz.style["transform"] =  "translateX("+newMazp+"vw)";
				moveAllInvaders(invaders,pas);
			}
			else {
				pas = 1.5;
				moveAllInvaders(invaders,pas);
			}
		}
	},false);

	function getTranslateNum(elt)
	{
		return parseFloat(elt.style["transform"].substring(11));
	}

	function getPosInvaders(invaderArr)
	{
		var pos = [];
		for(i = 0; i < invaderArr.length; i++)
			pos[i] = getTranslateNum(invaderArr[i]);
		return pos;
	}

	function moveAllInvaders(invaderArr,pas)
	{
		var currpos = getPosInvaders(invaderArr);
		console.log("place des invaders",currpos);
		for(i = 0; i < invaderArr.length; i++)
		{
			console.log("on bouge", i);
			newInvp = currpos[i] - pas;
			invaderArr[i].style["transform"] = "translateX("+newInvp+"vw)";
			if(i == 0) console.log(newInvp,getTranslateNum(maz));
			if (98 <= newInvp + getTranslateNum(maz) &&  newInvp + getTranslateNum(maz) <= 100)
			{
				alert("je te parle!");
			}
		}
	}

},false);

// window.addEventListener("load", function() {
// 	console.log("js charge");
// 	var pas = 0.75;
// 	var invader = document.querySelector("invader");
// 	var maz = document.querySelector("mazars");
// 	var bp = getTranslateNum(maz);
// 	var rp = invader.style["transform"].substring(11);
// 	rp = parseFloat(rp);
// 	console.log("bp"+bp,"rp"+rp);
// 	window.addEventListener("keydown", function(evt) {
// 		if(evt.keyCode == 39) {
// 			evt.preventDefault();
// 			var bp = maz.style["transform"].substring(11);
// 			bp = parseFloat(bp);
// 			console.log("qfqf",bp);
// 			if(bp <= 45) {
// 				console.log("bulbibouge");
// 				var bp = maz.style["transform"].substring(11);
// 				bp = parseFloat(bp);
// 				var newBp = bp + pas;
// 				maz.style["transform"] =  "translateX("+newBp+"vw)";
// 				var rp = invader.style["transform"].substring(11);
// 				rp = parseFloat(rp);
// 				var newRp = rp - pas;
// 				invader.style["transform"] =  "translateX("+newRp+"vw)";
// 			}
// 			else {
// 				var rp = invader.style["transform"].substring(11);
// 				rp = parseFloat(rp);
// 				var newRp = rp - pas;
// 				console.log("invader bouge");
// 				console.log("rp",rp);	
// 				invader.style["transform"] =  "translateX("+newRp+"vw)";
// 				if (rp == 50)
// 				{
// 					alert("je te parle!");
// 				}
// 			}
// 		}
// 	},false);
// },false);