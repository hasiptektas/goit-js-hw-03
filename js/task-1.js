function slugify(title) {
    return title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}
  
function slugify1 (title) {
    return title.toLowerCase().split(" ").join("-");
}
  
  
  
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));