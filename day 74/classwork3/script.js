const languagesList = document.getElementById("languagesList");
const languages = ["JavaScript", "Python", "Java", "C++"];
for (let i = 0; i < languages.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = languages[i];
    languagesList.appendChild(listItem);
}
