//dot notation ამ გზით შეგვიძლია წვდომა გავაკეთოთ ობიექტის შიდა თვისებაზე ან გამოვიძახოთ მეთოდი

// ვაწესებთ ასაკს
let age = 15;  // ჩაანაცვლეთ ეს თქვენი ასაკით

// შევამოწმოთ სრულწლოვნება
if (age >= 18) {
    console.log("You are eligable.");
} else {
    let yearsLeft = 18 - age;
    console.log("You are not eligable. " + yearsLeft +"Years"+ " Left to be eligable.");
}
