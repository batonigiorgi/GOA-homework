function playGame(userChoice) {
    const choices = ["ქვა", "ბადე", "მაკრატელი"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    let result = "";

    if (userChoice === computerChoice) {
        result = "ფრეა! ორივემ აირჩია " + userChoice;
    } else if (
        (userChoice === "ქვა" && computerChoice === "მაკრატელი") ||
        (userChoice === "ბადე" && computerChoice === "ქვა") ||
        (userChoice === "მაკრატელი" && computerChoice === "ბადე")
    ) {
        result = "თქვენ მოიგეთ! " + userChoice + " ამარცხებს " + computerChoice;
    } else {
        result = "თქვენ დამარცხდით! " + computerChoice + " ამარცხებს " + userChoice;
    }

    document.getElementById("result").innerText = result;
}
