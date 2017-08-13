

document.getElementById("button_td").onclick = function add(event) {

		rows = document.getElementById("main_table_section");
		row = document.createElement("tr");
		var buttonTd = document.getElementById("button_td");
		rows.insertBefore(row, buttonTd);

		var firstCol = document.createElement("td");
		firstCol.innerHTML = prompt("Введите номер строки(№):");

		var secondCol = document.createElement("td");
		secondCol.innerHTML = prompt("Введите наименование товара:");


		var thirdCol = document.createElement("td");
		var thirdText = thirdCol.innerHTML += prompt("Введите количество:");

		var fourthCol = document.createElement("td");
		var fourthText = fourthCol.innerHTML += prompt("Введите цену за единицу:");

		var fifthCol = document.createElement("td");

		fifthCol.innerHTML = thirdText * fourthText;

		row.appendChild(firstCol);
		row.appendChild(secondCol);
		row.appendChild(thirdCol);
		row.appendChild(fourthCol);
		row.appendChild(fifthCol);

}

