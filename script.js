// const aa =document.getElementById("testChange1")
function changeColor() {
	const tg = document.getElementById("testChange1")
	tg.innerHTML = "Text has been changed!!"
	tg.style.color = "blue"
}

function toggleDisplay() {
	const tg = document.getElementById("testChange1")
	const btn_2 = document.getElementById("btn_2")

	if (tg.classList.contains("hidden")) {
		tg.classList.remove("hidden")
		btn_2.innerHTML = "hide"
	} else {
		tg.classList.add("hidden")
		btn_2.innerHTML = "show"
	}
}

function sum() {
	const num1 = document.getElementById("tbx_1").value
	const num2 = document.getElementById("tbx_2").value
	const result = document.getElementById("result")
	result.innerHTML = Number(num1) + Number(num2)
}

// This is method for create the event handlers onClick by JavaScript
const btn_submit = document.getElementById("btn_submit")
btn_submit.addEventListener("click", addContent)

function addContent() {
	const tbx_1 = document.getElementById("tbx_1")
	const result = document.getElementById("result")
	result.innerHTML = tbx_1.value
	tbx_1.value = ""
	tbx_1.focus()
}

function addContent2() {
	// const tbx_2 = document.getElementById("tbx_2")
	// const result2 = document.getElementById("result2")
	// const newDiv = document.createElement("div")
	// const newContent = document.createTextNode(tbx_2.value)
	// newDiv.appendChild(newContent)
	// result2.appendChild(newDiv)

	// method 2
	const tbx_2 = document.getElementById("tbx_2")
	const result2 = document.getElementById("result2")
	result2.innerHTML += `<h3>${tbx_2.value}</h3>`
	tbx_2.value = ""
	tbx_2.focus()
}

function removeContent2() {
	const result2 = document.getElementById("result2")
	result2.innerHTML = ""

}

// -----------------------------------------
// API
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// More famous mothod by use under function : await async function
async function fetchData(){
	const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
	// console.log(data);
	const json = await data.json();
	// console.log(json);

	const titleList = document.getElementById('titleList')
	for (let i = 0; i < json.length; i++) {
		titleList.innerHTML += `<li>${json[i].title}</li>`
	}

}

fetchData();

// -----------------------------------------
function main() {

}
console.log("javascript is running . . . .");
main();
