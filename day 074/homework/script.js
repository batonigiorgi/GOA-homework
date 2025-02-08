// ახალი "div" ელემენტის შექმნა
let newDiv = document.createElement("div");

// ახალი "button" ელემენტის შექმნა
let newButton = document.createElement("button");

// "img" ელემენტის შექმნა
let newImage = document.createElement("img");



// HTML-ის body-ში ახალი "div"-ის დამატება
document.body.appendChild(newDiv);

// ახალი ღილაკის დამატება "div"-ში
newDiv.appendChild(newButton);

// სურათის დამატება "div"-ში
newDiv.appendChild(newImage);




// ახალი "div"-ის ჩასმა "body"-ში სხვა ელემენტამდე
document.body.insertBefore(newDiv, document.body.firstChild);

// "ul"-ში ახალი ელემენტის ჩასმა სხვა "li"-ზე ადრე
let listItem = document.createElement("li");
newList.insertBefore(listItem, newList.firstChild);

// "p" ტექსტის ჩასმა სხვა "p"-ზე ადრე
let newText = document.createElement("p");
document.body.insertBefore(newText, newParagraph);



// "body"-დან "div"-ის წაშლა
document.body.removeChild(newDiv);

// სიიდან კონკრეტული ელემენტის წაშლა
newList.removeChild(newListItem);

// "div"-დან სურათის წაშლა
newDiv.removeChild(newImage);




// "div"-ის მშობლის პოვნა
let parent = newDiv.parentNode;

// სიიდან წაშლილი ელემენტის მშობელი
let removedItemParent = newListItem.parentNode;

// სურათის მშობელი
let imgParent = newImage.parentNode;




// ახალი "p"-ს ჩასმა "div"-ში სხვა ტექსტის ნაცვლად
newDiv.replaceChild(newParagraph, textNode);

// სიაში ახალი ელემენტის ჩასმა სხვა "li"-ს ნაცვლად
let anotherListItem = document.createElement("li");
newList.replaceChild(anotherListItem, listItem);

// ღილაკის ჩანაცვლება ახალ ღილაკზე
let replacedButton = document.createElement("button");
newDiv.replaceChild(replacedButton, newButton);

