var saveButton = document.getElementById("saveButton");
var wordInput = document.getElementById("wordInput");
var savedWordsList = document.getElementById("savedWords");
var words = [];

saveButton.addEventListener("click", function() {
    var word = wordInput.value;
    if (word) {
        words.push(word);
        wordInput.value = "";
        displaySavedWords();
    }
});

function displaySavedWords() {
    savedWordsList.innerHTML = "";

    for (var i = 0; i < words.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = words[i];
        savedWordsList.appendChild(listItem);
    }
}

document.getElementById("searchBtn").addEventListener("click", function() {
    search_the_word();
});

function search_the_word() {
  var input = document.getElementById("searchBar").value;
  input = input.toLowerCase();
  var list_of_words = document.getElementById("savedWords").children;
  var wordFound = false;

  for (i = 0; i < list_of_words.length; ++i) {
    if (list_of_words[i].innerHTML.toLowerCase().includes(input)) {
      list_of_words[i].style.display = "list-item";
      wordFound = true;
    } else {
      list_of_words[i].style.display = "none";
    }
  }

  if (!wordFound) {
    alert("Cuvântul nu se află în dicționar!");
  }
}

