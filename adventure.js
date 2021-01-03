var container = document.getElementById("game-container");
var title = document.getElementById("title");
var description = document.getElementById("description");
var gameButtons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventoryItem = document.getElementById("inventoryItem");
var inventory = {"bazooka":false, "lockpick":false, "knife":false, "diamond":false, "uniform":false, "pepperspray":false, "ring":false};
var securitydefenses = {"holeInWall": false, "guard": false, "system": true};
var time = 0;

title.innerText = "Museum beroven";

description.innerText = "Klik op de knop om te starten";

inventoryItem.onclick = identify;

function identify(){
	if (item == "security"){
		trade();
	}
	else if (securitydefenses["holeInWall"]==true && item == 'ring') {
		pickUp(item);
		game();
	}
	else if (item=="ring"){
		description.innerText="Ga terug naar je cliënt."
		securitydefenses["guard"]=true;
		pickUp(item);
	}
	else{
		pickUp(item);
	}
}

button2.innerText = "start";

button2.onclick = start;

function start() {
	time = 0;
	inventory = {"bazooka":false, "lockpick":false, "knife":false, "diamond":false, "uniform":false, "pepperspray":false, "ring":false};
	securitydefenses = {"holeInWall": false, "guard": false, "system": true};
	container.style.backgroundImage = "url('background-images/manInShadows.jpg')";
	title.innerText = "Museum beroven";
	description.innerText = "Je moet een ring van een museum stelen en die terugbrengen naar je cliënt. Je mag niet terugkomen zonder ring.";
	button2.style.visibility="visible";
	button2.innerText = "beginnen";
	button2.onclick = eersteStraat;
	button1.style.visibility="hidden";
	button1.onclick=undefined;
	button3.style.visibility="hidden";
	button3.onclick=undefined;
	inventoryItem.style.display="none";
}

function eersteStraat() {
	time++
	title.innerText="Begin";
	console.log("Begin");
	container.style.backgroundImage = "url('background-images/eersteStraat.jpg')";
	button1.style.visibility = "visible";
	button1.innerText = "Links";
	button1.onclick = nieuwstraatLinks;
	button2.onclick = einde;
	button2.innerText = "Terug";
	button3.style.visibility = "visible";
	button3.innerText = "Rechts";
	button3.onclick = nieuwstraatRechts;
	if (inventory["lockpick"]==false) {
		inventoryItem.src = "images/lockpick.png";
		item = "lockpick";
		inventoryItem.style.display = "block";
		inventoryItem.style.width = "50px";
		inventoryItem.style.left = "600px";
		inventoryItem.style.top = "550px";
	}
	else{
		inventoryItem.style.display="none";
	}
}

function nieuwstraatLinks(){
	time++;
	title.innerText="Nieuwstraat links";
	console.log("Nieuwstraat links");
	container.style.backgroundImage = "url('background-images/nieuwstraatLinks.jpg')";
	if (inventory["uniform"]==false){
		inventoryItem.src = "images/bewaker.png";
		inventoryItem.style.display = "block";
		inventoryItem.style.width = "200px";
		inventoryItem.style.left = "200px";
		inventoryItem.style.top = "350px";
		item = "security";
	}
	else{
		inventoryItem.style.display="none";
	}
	button1.style.visibility = "hidden";
	button1.onclick = undefined;
	button2.innerText="terug";
	button2.style.visibility="visible";
	button2.onclick = eersteStraat;
	button3.style.visibility="hidden";
	button3.onclick=undefined;
}

function nieuwstraatRechts(){
	time++;
	title.innerText="Nieuwstraat rechts";
	console.log("Nieuwstraat rechts");
	container.style.backgroundImage = "url('background-images/nieuwstraatRechts.jpg')";
	if (inventory["lockpick"]==true){
		button1.style.visibility="visible";
		button1.innerText="inbreken";
		button1.onclick=inbraakDiamand;
	}
	else{
		button1.style.visibility="hidden";
		button1.onclick=undefined;
	}
	button2.innerText = "terug";
	button2.style.visibility="visible";
	button2.onclick = eersteStraat;
	button3.innerText="Rechts";
	button3.style.visibility="visible";
	button3.onclick=museumstraat;
	if (inventory["knife"]==false) {
		inventoryItem.src="images/knife.png";
		inventoryItem.style.top="520px";
		inventoryItem.style.left="280px";
		inventoryItem.style.width="50px";
		inventoryItem.style.display="block";
		item="knife";
	}
	else{
		inventoryItem.style.display = "none";
	}
}

function museumstraat(){
	time++
	title.innerText="Museumstraat";
	console.log("Museumstraat");
	container.style.backgroundImage = "url('background-images/museumstraat.jpg')";
	if (inventory["lockpick"]==true){
		button1.style.visibility="visible";
		button1.innerText="inbreken";
		button1.onclick=inbraakBazooka;
	}
	else{
		button1.style.visibility="hidden";
		button1.onclick=undefined;
	}
	button2.style.visibility="visible";
	button2.onclick=nieuwstraatRechts;
	button2.innerText="terug";
	button3.style.visibility="visible";
	button3.innerText="Rechts";
	button3.onclick=museumIngang;
	inventoryItem.style.display="none";
}

function museumIngang(){
	time++
	title.innerText="Ingang museum"
	console.log("Ingang museum")
	container.style.backgroundImage = "url('background-images/dordrechts-museum.jpg')"
	button1.style.visibility="visible";
	button1.innerText="terug";
	button1.onclick=museumstraat;
	button2.style.visibility="hidden";
	button2.onclick=undefined;
	if (inventory["lockpick"]==true) {
		button3.style.visibility="visible";
		button3.onclick = museumBegin;
		button3.innerText="inbreken";
	}
	else{
		button3.style.visibility="hidden";
		button3.onclick=undefined;
	}
	inventoryItem.style.display="none"
}

function museumBegin(){
	time++
	title.innerText = "museum eerste kamer"
	container.style.backgroundImage="url('background-images/museumBegin.jpg')";
	button1.innerText="Links";
	button1.style.visibility = "visible";
	button1.onclick = museumSplit;
	if (inventory["bazooka"]==true) {
		button2.style.visibility = "visible";
		button2.onclick = MakeHoleInWall;
		button2.innerText = "blaas een gat in de muur";
	}
	else{
		button2.style.visibility = "hidden";
		button2.onclick = undefined;
	}
	button3.style.visibility="visible";
	button3.innerText="terug";
	button3.onclick=museumIngang;
	inventoryItem.style.display="none";
	if (securitydefenses["guard"]==true && inventory["uniform"]==false) {
		console.log("hello")
		if (inventory["knife"]==true) {
			game();
		}
		else{
			cel();
		}
	}
}

function MakeHoleInWall(){
	securitydefenses["holeInWall"]=true;
	museumEindpunt();
}

function museumSplit(){
	time++
	title.innerText = "museum ruimte 1"
	console.log("museum split")
	container.style.backgroundImage="url('background-images/museum1.jpg')";
	container.style.width="1000px";
	button1.innerText="Links";
	button1.style.visibility="visible";
	button1.onclick=computerKamer;
	button2.onclick=museumBegin;
	button2.style.visibility="visible";
	button2.innerText = "terug";
	button3.style.visibility = "visible";
	button3.innerText="Rechts";
	if (securitydefenses["system"]==true) {
		button3.onclick=cel;
	}
	else{
		button3.onclick=museumEindpunt;
	}
	inventoryItem.style.display="none";
}

function computerKamer(){
	time++;
	title.innerText= "computer kamer";
	console.log("computer kamer");
	container.style.width="600px";
	container.style.backgroundImage="url('background-images/computerKamer.jpg')"
	button2.style.visibility="hidden";
	button2.onclick=undefined;
	if (securitydefenses["system"]==true) {
		button1.innerText="hacken";
		button1.onclick=hacken;
		button1.style.visibility="visible";
	}
	else{
		button1.onclick=undefined;
		button1.style.visibility="hidden";
	}
	button3.onclick=museumSplit;
	button3.style.visibility="visible";
	button3.innerText="terug";
	if (inventory["pepperspray"]==false) {
		inventoryItem.src="images/pepperspray.png";
		inventoryItem.style.width="30px";
		inventoryItem.style.top="370px";
		inventoryItem.style.left="150px";
		inventoryItem.style.display="block";
		item="pepperspray";
	}
	else{
		inventoryItem.style.display="none";
	}
}

function museumEindpunt(){
	time++
	title.innerText="museum eindpunt";
	console.log("museum eindpunt");
	container.style.backgroundImage='url("background-images/eindpunt.jpg")';
	button1.style.visibility="visible";
	button1.innerText="naar achteren";
	button1.onclick=museumSplit;
	if (securitydefenses["holeInWall"]==true) {
		button2.onclick=museumBegin;
		button2.style.visibility="visible";
		button2.innerText="Door gat heen gaan";
	}
	else{
		button2.onclick=undefined;
		button2.style.visibility="hidden";
	}
	button3.style.visibility="visible";
	button3.innerText="naar voren";
	if (inventory["pepperspray"]==true) {
		button3.onclick = nooduitgang;
	}
	else{
		button3.onclick = lijk;
	}
	if (inventory["ring"]==false && time<=51) {
		inventoryItem.style.display="block";
		inventoryItem.src="images/ring.png";
		inventoryItem.style.width="50px";
		inventoryItem.style.top="350px";
		inventoryItem.style.left="430px";
		item="ring";
	}
	else{
		inventoryItem.style.display="none";
	}
}

function nooduitgang(){
	time++
	title.innerText="nooduitgang";
	console.log("nooduitgang");
	container.style.backgroundImage="url('background-images/nooddeur.jpg')";
	button1.onclick=nieuwstraatLinks;
	button1.style.visibility="visible";
	button1.innerText="ontsnappen";
	button2.onclick=undefined;
	button2.style.visibility="hidden";
	button3.style.visibility="visible";
	button3.onclick = museumEindpunt;
	button3.innerText = "terug";
}

function inbraakDiamand(){
	time++;
	console.log("kamerD");
	title.innerText = "kamerD";
	container.style.backgroundImage="url('background-images/huiskamerDiamand.jpg')";
	button2.onclick=nieuwstraatRechts;
	button2.style.visibility="visible";
	button2.innerText="terug";
	button1.onclick=undefined;
	button1.style.visibility="hidden";
	button3.onclick=undefined;
	button3.style.visibility="hidden";
	if (inventory["diamond"]==false){
		inventoryItem.src="images/diamond.png";
		inventoryItem.style.display="block";
		inventoryItem.style.width="50px";
		inventoryItem.style.left="550px";
		inventoryItem.style.top="330px";
		item="diamond";
	}
	else{
		inventoryItem.style.display="none";
	}
}

function inbraakBazooka(){
	time++
	console.log("kamerB");
	title.innerText = "kamerB";
	container.style.backgroundImage="url('background-images/huiskamer.jpg')";
	button2.onclick=museumstraat;
	button2.innerText="terug";
	button2.style.visibility="visible";
	button1.onclick=undefined;
	button1.style.visibility="hidden";
	button3.onclick=undefined;
	button3.style.visibility = "hidden";
	if (inventory["bazooka"]==false) {
		inventoryItem.src="images/bazooka.png";
		inventoryItem.style.display="block";
		inventoryItem.style.width="200px";
		inventoryItem.style.left="200px";
		inventoryItem.style.top="480px";
		item="bazooka";
	}
	else{
		inventoryItem.style.display="none";
	}
}

function pickUp(item){
	inventory[item]=true;
	inventoryItem.style.display = "none";
}
function trade(){
	if (inventory["diamond"]==false) {
		alert("Je kan zijn bewakers outfit kopen met een diamand");
	}
	else if (inventory["diamond"]==true) {
		inventory["uniform"]=true;
		inventoryItem.style.display = "none";
		alert("Je hebt zijn uniform gekocht");
	}
}

function hacken(){
	securitydefenses["system"]=false;
	alert("Je hebt in het system gehackt");
}

function cel(){
	title.innerText = "cel";
	console.log("cel")
	description.innerText = "Je bent gepakt";
	container.style.backgroundImage = "url('background-images/cel.jpg')"
	button1.onclick = undefined;
	button1.style.visibility = "hidden";
	button2.style.visibility = "visible";
	button2.onclick = start;
	button2.innerText = "opnieuw";
	button3.style.visibility = "hidden";
	button3.onclick = undefined;
	inventoryItem.style.display="none";
}

function lijk(){
	title.innerText = "dood";
	console.log("dood");
	description.innerText = "Je bent vermoord door een rivaal";
	container.style.backgroundImage = "url('background-images/lijk.jpeg')"
	button1.onclick = undefined;
	button1.style.visibility = "hidden";
	button2.style.visibility = "visible";
	button2.onclick = start;
	button2.innerText = "opnieuw";
	button3.style.visibility = "hidden";
	button3.onclick = undefined;
	inventoryItem.style.display="none";
}

function einde() {
	if (inventory["ring"]==false) {
		title.innerText = "neergeschoten";
		console.log("neergeschoten");
		description.innerText = "Waar is de ring?!";
		container.style.backgroundImage = "url('background-images/pistool.jpg";
		button1.style.visibility="hidden";
		button1.onclick=undefined;
		button2.style.visibility="visible";
		button2.onclick=start;
		button2.innerText="opnieuw beginnen";
		button3.style.visibility="hidden";
		button3.onclick=undefined;
		inventoryItem.style.display="none";
	}
	else{
		title.innerText = "Succes";
		console.log("Succes");
		description.innerText = "Je hebt de ring gebracht";
		container.style.backgroundImage = "url('background-images/manInShadows.jpg')";
		button1.style.visibility="hidden";
		button1.onclick=undefined;
		button2.style.visibility="visible";
		button2.onclick=start;
		button2.innerText="opnieuw beginnen";
		button3.style.visibility="hidden";
		button3.onclick=undefined;
		inventoryItem.style.display="none";
	}
}

function game(){

	gameButtons.style.display="none";
	var text1 = "Je wordt aangevallen door de bewakers. Ontwijk hun aanvallen door op de toetsen w, a, s en d te klikken. De aanvallen zijn wit gekleurd. ";
	var text2 = "Met w ga je naar boven, a naar links, s naar beneden, en d naar boven. Na een tijdje krijg je de kans om aan te vallen met z.";
	var text3 = "Wanneer jij gaat aanvallen, dan krijg je een groene balk te zien, waarbij er een blauwe streep in het midden staat, en een rode links";
	var text4 = "De rode streep zal over de balk heen gaan. Als die aan het einde komt, doe je geen schade. Je doet meer schade als de rode streep dichter bij de blauwe komt";
	var text5 = "Als je genoeg schade doet, win jij. Als jij teveel schade neemt, verlies je. Druk op m om te beginnen."
	description.innerText=text1+text2+text3+text4+text5;
	var enemyHP=1450*3;
	var yourHP=200;
	var y;
	var p;
	var b;
	var bombCount=0;
	var d
	var heart
	var yourMaxHP
	var showYourHP
	var enemyMaxHP;
	var enemyShowHP;
	var boxWidth;
	var boxHeight;
	var boxTop
	var heartTop;
	var heartLeft;
	var z = 0;
	var o = 0;
	var bombExplosion=0;
	var attacks = [];
	var up;
	var attack1FormationArray=["top", "left"];
	var attack2FormationArray=[
	[0, 50],
	[0, 100],
	[50, 100]
	];
	var randomAttackFormation;
	var attackStart
	var chooseAttack=[attack1, attack2, attack3];
	document.onkeydown=startingUp
	function startingUp(e){
		if (e.which==77) {
			startGame();
		}
	}
	function startGame(){
		container.style.display="none";
		document.onkeydown=null;
		document.onkeydown=movePlayer;
		yourMaxHP=document.createElement("div");
		document.body.appendChild(yourMaxHP);
		yourMaxHP.style.margin="0 auto";
		yourMaxHP.style.width="200px";
		yourMaxHP.style.height="20px";
		yourMaxHP.style.position="relative";
		yourMaxHP.style.top="660px";
		yourMaxHP.style.backgroundColor="red";
		yourMaxHP.style.zIndex="1"
		showYourHP=document.createElement("div");
		yourMaxHP.appendChild(showYourHP);
		showYourHP.style.margin="0 auto";
		showYourHP.style.width=yourHP + "px";
		showYourHP.style.height="20px";
		showYourHP.style.position="absolute";
		showYourHP.style.backgroundColor="yellow";
		showYourHP.style.zIndex="2";

		chooseAttack[Math.floor(Math.random()*chooseAttack.length)]();
		return;
	}

	function attack1(){
		boxWidth=260;
		boxHeight=260;
		boxTop=350;
		heartTop=110;
		heartLeft=110;
		o=400;
		makeBox(boxWidth, boxHeight, boxTop, heartTop, heartLeft);
		makeattacks(18, 20);
		attack1Formation();
		setTimeout(hello, Math.ceil(Math.random()*3000));

		return;
	}
	function attack1Formation(){
		randomAttackFormation=Math.floor(Math.random()*attack1FormationArray.length);
		for (var i = 0; i < 14; i++) {
			attacks[i].style.left=(240-i*50)+"px";
			attacks[i].style.top=((i*-50))-50+"px";
		}
		var randomNumber=Math.ceil(Math.random()*50);
		if (attack1FormationArray[randomAttackFormation]=="left") {
			for (var i = 14; i < 18; i++) {
				attacks[i].style.left=(-20)+"px";
				attacks[i].style.top=((i-14)*60+randomNumber)+"px";
			}
		}
		else{
			for (var i = 14; i < 18; i++) {
				attacks[i].style.top=(-20)+"px";
				attacks[i].style.left=((i-14)*60+randomNumber)+"px";
			}
		}
		return
	}

	function attack2(){
		boxWidth=150;
		boxHeight=150;
		boxTop=400;
		heartTop=70;
		heartLeft=70;
		o=200;
		makeBox(boxWidth, boxHeight, boxTop, heartTop, heartLeft);
		makeattacks(4, 50);
		attack2Formation();
		setTimeout(lasers, 2000);
		return;
	}

	function attack2Formation(){
		randomAttackFormation=Math.floor(Math.random()*3);
		attacks[0].style.top=-50+"px";
		attacks[0].style.left=attack2FormationArray[randomAttackFormation][0]+"px";
		attacks[1].style.top=-50+"px";
		attacks[1].style.left=attack2FormationArray[randomAttackFormation][1]+"px";
		randomAttackFormation=Math.floor(Math.random()*3);
		attacks[2].style.left=-50+"px";
		attacks[2].style.top=attack2FormationArray[randomAttackFormation][0]+"px";
		attacks[3].style.left=-50+"px";
		attacks[3].style.top=attack2FormationArray[randomAttackFormation][1]+"px";
		return
	}

	function attack3(){
		boxWidth=400;
		boxHeight=300;
		boxTop=250;
		heartTop=140;
		heartLeft=190;
		o=200;
		makeBox(boxWidth, boxHeight, boxTop, heartTop, heartLeft);
		makeattacks(14, 10);
		attack3Formation();
		setTimeout(bombs, 1000);
		return;
	}

	function attack3Formation(){
		Math.floor(Math.random()*attacks.length);
		randomAttackFormation=Math.floor(Math.random()*attack1FormationArray.length);
		for (var i = 0; i < attacks.length; i++) {
			attacks[i].style.left=(Math.floor(Math.random()*(boxWidth-10)))+"px";
			attacks[i].style.top=(Math.floor(Math.random()*(boxHeight-10))-300)+"px";
			attacks[i].style.zIndex="2";
			attacks[i].style.backgroundColor="blue";
		}
		return
	}

	function makeBox(boxWidth, boxHeight, boxTop, heartTop, heartLeft){
		var x = document.createElement("div");
		document.body.appendChild(x);
		x.setAttribute("id", "d");
		d = document.getElementById("d");
		document.body.style.backgroundColor="black";
		d.style.borderStyle="solid";
		d.style.borderColor="white";
		d.style.margin="0 auto";
		d.style.width=boxWidth + "px";
		d.style.height=boxHeight + "px";
		d.style.position="relative";
		d.style.top= boxTop + "px";
		var addHeart = document.createElement("img");
		x.appendChild(addHeart);
		addHeart.setAttribute("id", "heart");
		heart = document.getElementById("heart");
		heart.src="images/soul.png";
		heart.style.position="absolute";
		heart.style.top=heartTop + "px";
		heart.style.left=heartLeft + "px";
		heart.style.width=20+"px";
		heart.style.zIndex="1";
		return
	}

	function movePlayer(e){
		if (e.which==87 && Number(heart.style.top.replace("px", "")) > 0){
			heart.style.top = (Number(heart.style.top.replace("px", "")) - 10) + "px";
		}
		else if (e.which==65 && Number(heart.style.left.replace("px", "")) > 0){
			heart.style.left = (Number(heart.style.left.replace("px", "")) - 10) + "px";
		}
		else if (e.which==83 && Number(heart.style.top.replace("px", "")) < Number(d.style.height.replace("px", ""))-20){
			heart.style.top = (Number(heart.style.top.replace("px", "")) + 10) + "px";
		}
		else if (e.which==68 && Number(heart.style.left.replace("px", "")) < Number(d.style.width.replace("px", ""))-20){
			heart.style.left = (Number(heart.style.left.replace("px", "")) + 10) + "px";
		}
		return
	}

	function checkCollision(){
		var collision = false;
		var player_x = Number(heart.style.left.replace("px", ""));
		var player_y = Number(heart.style.top.replace("px", ""));
		var player_w = 20;
		var player_h = 20;
		for (var i = 0; i < attacks.length; i++) {
			var attack_x = Number(attacks[i].style.left.replace("px", ""));
			var attack_y = Number(attacks[i].style.top.replace("px", ""));
			var attack_w = Number(attacks[i].style.width.replace("px", ""));
			var attack_h = Number(attacks[i].style.height.replace("px", ""));
			if ((player_x >= attack_x && player_x <= attack_x + attack_w ||
				player_x + player_w >= attack_x && player_x + player_w <= attack_x + attack_w) &&
				(player_y >= attack_y && player_y <= attack_y + attack_h ||
				player_y + player_h >= attack_y && player_y + player_h <= attack_y + attack_h)
				) {
				collision=true;		
			}
		}
		if (collision==true) {
			yourHP--
			showYourHP.style.width=yourHP + "px";
		}
		if (yourHP<=0) {
			yourMaxHP.remove();
			showYourHP.remove();
			for (var i = 0; i < attacks.length; i++) {
				attacks[i].remove();
			}
			d.remove();
			heart.remove();
			clearInterval(attackStart);
			document.body.style.backgroundColor="white";
			container.style.display="block";
			gameButtons.style.display="block";
			document.onkeydown=null;
			cel();
		}
		return;
	}
	function hello(){
		attackStart = setInterval(helloAttack, 5);
		setTimeout(hello2, (1000+(Math.ceil(Math.random()*1000))))
		return
	}

	function helloAttack(){
		for (var i = 0; i < 14; i++) {
			attacks[i].style.top = (Number(attacks[i].style.top.replace("px", "")) + 1) + "px";
			attacks[i].style.left = (Number(attacks[i].style.left.replace("px", "")) + 1) + "px";
			if (Number(attacks[i].style.top.replace("px", ""))==250) {
				attacks[i].remove();
			}
		}
		return
	}

	function hello2(){
		clearInterval(attackStart);
		attackStart = setInterval(helloAttack2, 2);
		return
	}
	function helloAttack2(){
		for (var i = 0; i < 14; i++) {
			attacks[i].style.top = (Number(attacks[i].style.top.replace("px", "")) + 1) + "px";
			attacks[i].style.left = (Number(attacks[i].style.left.replace("px", "")) - 1) + "px";
			if (Number(attacks[i].style.top.replace("px", ""))==250) {
				attacks[i].remove();
			}
		}
		if (attack1FormationArray[randomAttackFormation]=="left") {
			for (var i = 14; i < 18; i++) {
				attacks[i].style.width = 280 + "px";
			}
		}
		else{
			for (var i = 14; i < 18; i++) {
			attacks[i].style.height = 280 + "px";
			}
		}
		checkCollision();
		z++;
		if (z==o){
			clearInterval(attackStart);
			if (z<1600){
				o+=400
				for (var i = 0; i < attacks.length; i++) {
					attacks[i].remove();
				}
				makeattacks(18, 20);
				attack1Formation();
				setTimeout(hello, Math.ceil(Math.random()*3000));
			}
			else{
				o = 0;
				z = 0;
				attackEnemy();
			}
		}
		return
	}

	function lasers(){
		attackStart = setInterval(laserAttack, 1);
		return
	}
	function laserAttack(){
		attacks[0].style.height=200+"px";
		attacks[1].style.height=200+"px";
		attacks[2].style.width=200+"px";
		attacks[3].style.width=200+"px";
		checkCollision();
		z++;
		if (z==o){
			clearInterval(attackStart);
			if (z<1000){
				o+=200
				for (var i = 0; i < attacks.length; i++) {
					attacks[i].remove();
				}
				makeattacks(4, 50);
				attack2Formation();
				setTimeout(lasers, 2000);
			}
			else{
				o = 0;
				z = 0;
				attackEnemy();
			}
		}
		return
	}

	function bombs(){
		attackStart = setInterval(launchBombs, 5);
		return
	}

	function launchBombs(){
		for (var i = 0; i < attacks.length; i++) {
			attacks[i].style.top = (Number(attacks[i].style.top.replace("px", "")) + 1) + "px";
		}
		bombCount++
		if (bombCount>=300){	
			clearInterval(attackStart);
			bombCount=0;
			attackStart = setInterval(bombAttack, 3);
		}
		console.log("hello");
		return
	}

	function bombAttack(){
		if (bombExplosion<45) {
			for (var i = 0; i < attacks.length; i++) {
				attacks[i].style.top = (Number(attacks[i].style.top.replace("px", "")) - 1) + "px";
				attacks[i].style.left = (Number(attacks[i].style.left.replace("px", "")) - 1) + "px";
				attacks[i].style.width = (Number(attacks[i].style.width.replace("px", "")) + 2) + "px";
				attacks[i].style.height = (Number(attacks[i].style.height.replace("px", "")) + 2) + "px";
				attacks[i].style.backgroundColor="white";
				attacks[i].style.zIndex="0";
			}
		}
		checkCollision();
		bombExplosion++
		z++;
		if (z==o){
			bombExplosion=0;
			clearInterval(attackStart);
			if (z<500){
				o+=100
				for (var i = 0; i < attacks.length; i++) {
					attacks[i].remove();
				}
				makeattacks(14, 10);
				attack3Formation();
				setTimeout(bombs, 1000);
			}
			else{
				o = 0;
				z = 0;
				attackEnemy();
			}
		}
		return;
	}

	function attackEnemy(){
		for (var i = 0; i < attacks.length; i++) {
			attacks[i].remove();
		}
		d.remove();
		heart.remove();
		var z = document.createElement("div");
		document.body.appendChild(z);
		z.setAttribute("id", "y");
		y = document.getElementById("y");	
		y.style.margin="0 auto";
		y.style.width="600px";
		y.style.height="200px";
		y.style.position="relative";
		y.style.top="250px";
		y.style.backgroundColor="green";	
		var q = document.createElement("div");
		y.appendChild(q);
		q.setAttribute("id", "p");
		p = document.getElementById("p");
		p.style.width="10px";
		p.style.height="200px";
		p.style.position="absolute";
		p.style.backgroundColor="red";
		p.style.zIndex="1";
		var a = document.createElement("div");
		y.appendChild(a);
		a.setAttribute("id", "b");
		b = document.getElementById("b");	
		b.style.width="20px";
		b.style.height="200px";
		b.style.position="absolute";
		b.style.left="290px";
		b.style.backgroundColor="blue";
		setTimeout(power, 1500);
		return
	}

	function power(){
		document.onkeydown=null;
		document.onkeydown=launchAttack;
		up = setInterval(powerUp, 0.1);
		return
	}

	function powerUp(){
		p.style.left = (Number(p.style.left.replace("px", "")) + 1) + "px";
		if (Number(p.style.left.replace("px", ""))==590) {
			clearInterval(up);
			y.remove();
			p.remove();
			b.remove();
			calculate();
		}
		return
	}

	function launchAttack(e){
		if (e.which==90){
			clearInterval(up);
			y.remove();
			p.remove();
			b.remove();
			calculate();
		}
		return
	}
	function calculate(){
		if (Number(p.style.left.replace("px", ""))<290){
			enemyHP-=Number(p.style.left.replace("px", ""));	
		}
		else if (Number(p.style.left.replace("px", ""))>=290 && Number(p.style.left.replace("px", ""))<=300){
			enemyHP-=290;
		}
		else if (Number(p.style.left.replace("px", ""))>300 && Number(p.style.left.replace("px", ""))<590){
			enemyHP-=(290-(Number(p.style.left.replace("px", ""))-300));
		}
		enemyMaxHP=document.createElement("div");
		document.body.appendChild(enemyMaxHP);
		enemyMaxHP.style.margin="0 auto";
		enemyMaxHP.style.width= 1450 + "px";
		enemyMaxHP.style.height="50px";
		enemyMaxHP.style.position="relative";
		enemyMaxHP.style.top="250px";
		enemyMaxHP.style.backgroundColor="red";
		enemyMaxHP.style.zIndex="1"
		enemyShowHP=document.createElement("div");
		enemyMaxHP.appendChild(enemyShowHP);
		enemyShowHP.style.margin="0 auto";
		enemyShowHP.style.width=(enemyHP / 3) + "px";
		enemyShowHP.style.height="50px";
		enemyShowHP.style.position="absolute";
		enemyShowHP.style.backgroundColor="yellow";
		enemyShowHP.style.zIndex="2";
		document.onkeydown=null;
		if (enemyHP>0) {
			setTimeout(continueGame, 2000);	
		}
		else{
			enemyMaxHP.remove();
			enemyShowHP.remove();
			yourMaxHP.remove();
			showYourHP.remove();
			document.body.style.backgroundColor="white";
			container.style.display="block";
			gameButtons.style.display="block";
			document.onkeydown=null;
			description.innerText="breng de ring naar jou cliënt";
		}
		return;
	}
	function continueGame(){
		yourMaxHP.remove();
		showYourHP.remove();		
		enemyMaxHP.remove();
		enemyShowHP.remove();
		startGame();
	}
	function makeattacks(totalattack, attackSize){
		attacks=[];
		for (var i = 0; i < totalattack; i++) {
			var atk = document.createElement("div");
			d.appendChild(atk);
			attacks.push(atk);
			attacks[i].style.width=attackSize+"px";
			attacks[i].style.height=attackSize+"px";
			attacks[i].style.backgroundColor="white";
			attacks[i].style.position="absolute";
			attacks[i].style.left=(i*50)+"px";
			attacks[i].style.top=(20)+"px";
			attacks[i].style.zIndex="0"
		}
		return;
	}
}