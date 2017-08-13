sum = prompt("Введите число:");

var result = (sum * 7)/100;

	if (sum == 0) {
		alert("Число не введено!");
	}

	else if (sum == false) {
		alert("Число не введено!");
	}

	else if (isNaN(sum)) {
		alert("Введите число!");
	}

	else {
		alert(result);
	}