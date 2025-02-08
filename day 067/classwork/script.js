// კონსტრუქტორი არის ფუნქცია რომელიც გამოიყენება ობიექტების შესაქმნელად
// იგი გვეხმარება რომ ერთი და იგივე სტრუქტურის მქონე ობიექტები მარტივად შევქმნათ

function person(name, lastname, age, gender, nationality) { 
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.gender = gender;
  this.nationality = nationality;  
}
//new keyword ქმის ახალ ობიექტებს პერსონ კონსტრუქციიას მიხედვიტ და აბრუნებს მას

const person1 = new person("Giorgi", "Mindorashvili", 15, "male", "Georgian")
const person2 = new person("ana", "shavdatuashivili", "მდედრობითი", "პროგრამისტი", "საქართველო");
const person3 = new person("გიორგი", 40, "მამრობითი", "დიზაინერი", "საქართველო");
const person4 = new person("ანა", 22, "მდედრობითი", "სტუდენტი", "საქართველო");
const person5 = new person("ალექსი", 35, "მამრობითი", "პედაგოგი", "საქართველო");