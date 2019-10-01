function yearSetter() {
	document.getElementById('year').innerHTML = '&copy; Copyright ' + new Date().getFullYear() + ', BlearyEyedDevelopment';
}

yearSetter();

document.getElementById('searchButton').addEventListener("click", function () {
	userInput = document.getElementById('spellInput').value;
	console.log(userInput);
});