let gomb = document.getElementById("szamitas");
gomb.addEventListener("click", szamitas);

function szamitas(){
	let cm = document.getElementById("cm");
	let kg = document.getElementById("kg");
	
	let bmi = parseFloat(kg.value)/(parseFloat(cm.value)/100)**2
	let rows=document.getElementById("tablazat").children

	for (let i = 0; i < rows.length; i++) {
		rows[i].style.backgroundColor="transparent";
		rows[i].style.color="#000"
		
	}
	
	console.log(bmi)

	if(bmi<=18.5){
		rows[0].style.backgroundColor="orange"
		rows[0].style.color="#fff"
	} else if(bmi>18.5 && bmi<25){
		rows[1].style.backgroundColor="orange"
		rows[1].style.color="#fff"

	} else if(bmi>24.9 && bmi<30){
		rows[2].style.backgroundColor="orange"
		rows[2].style.color="#fff"

	} else if(bmi>29.9 && bmi<35){
		rows[3].style.backgroundColor="orange"
		rows[3].style.color="#fff"

	} else if(bmi>34.9 && bmi<40){
		rows[4].style.backgroundColor="orange"
		rows[4].style.color="#fff"
	}

	let idealis=(21.7*((cm.value/100)**2))
	console.log(idealis)
	document.getElementById("idealis-cim").innerText="AZ IDEÁLIS TESTTÖMEGE: "+idealis.toFixed(1)
	let ertek=(18.5*((cm.value/100)**2)).toFixed(1)+" - "+(24.9*((cm.value/100)**2)).toFixed(1)
	document.getElementById("idealis-ertek").innerText=ertek
}