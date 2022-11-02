alert("NOTICE: List will be cleared once refreshed");

var button = document.getElementById("clickMe");
var input = document.getElementById("userinput");
var ul = document.getElementsByTagName("ul")[0];


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	/*creates list element with assigned to li*/
	li.appendChild(document.createTextNode(input.value));
	/*appends the given text to the list element*/
	ul.appendChild(li);
	/*appends li to the unordered list element*/

	li.addEventListener("click", function() {
		var check = this.classList.toggle("done");
		/*a boolean that toggles the class done on the list item when it is clicked*/

		var deleteItem = document.createElement("button");
		/*creates a button element assigned to deleteItem*/
		deleteItem.classList.add("removeButton");
		/*adds the class removeButton to deleteItem*/


		/*"check" is true*/
		if (check) {
			deleteItem.appendChild(document.createTextNode("Delete"));
			/*appends the text "delete" to the "deleteItem" button*/
			deleteItem.classList = "removeButton";

			li.appendChild(deleteItem);
			/*appends the "deleteItem" button to the created list item*/

			deleteItem.addEventListener("click", function() {
				this.parentElement.remove();
				/*removes the parent elemnt(li) of the "deleteItem" button*/
			});
		} else {
			this.getElementsByClassName("removeButton")[0].remove();
			/*removes the delete button when toggle is false*/
		}
	})

	/*returns input value to nothing*/
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);