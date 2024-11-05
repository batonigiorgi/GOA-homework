//შექმენით ფუნქცია რომელიც აბრუნებს არა-ნეგატიური რიცხვის ნეგატიურ ვერსიას და შემდეგ გამოიყენეთ ეს ფუნქცია რომ გამოიტანოთ დაბრუნებულზე 
// ერთით მეტი რიცხვი (მაგ: თუ ფუნქციას გადავეცით 44 საბოლლოდ უნდა გამოვიტანოთ (კონსოლში) -43 ) (ჩვეულებრივი ფუნქცია)
function makeNegative(number) {
    return number > 0 ? -number : number;
}

let result = makeNegative(44);
console.log(result + 1);  

//გავაკეთოთ ფუნქცია რომელიც გადაცემული ID-ს მიხედვით აბრუნებს html-ის ელემენტს
//(მაგ: "first" -> document.getElementbyId("first")) შემდეგ კი გამოიყენეთ ეს ფუნქცია რომ დაბრუნბულ ელემენტს 3 ატრიბუტი შევუცვალოთ
function getElementByIdAndModify(id) {
    let element = document.getElementById(id);
    
    if (element) {
        element.style.color = "blue";            
        element.style.backgroundColor = "yellow"; 
        element.textContent = "Modified Content"; 
    }
    
    return element;
} 

getElementByIdAndModify("first");
